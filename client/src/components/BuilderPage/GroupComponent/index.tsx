import React, { useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import GroupItemSummary from 'components/BuilderPage/GroupItemSummary';
import ListComponentsItem from 'components/BuilderPage/ListComponentsItem';
import FilterSocket from 'components/BuilderPage/FilterSocket';
import FilterHddTypes from 'components/BuilderPage/FilterHddType';
import FilterRange from 'components/BuilderPage/FilterRange';
import Paginator from 'components/Paginator';
import Spinner from 'components/Spinner';
import { SpecificationComponent } from 'components/BuilderPage/Specifications';
import { TypeComponent, TypeFilterBuilder } from 'containers/BuilderPage/types';
import { FilterName, filterRangeInfo, GroupName, servicesGetAll } from 'containers/BuilderPage/config';
import FilterRamTypes from 'components/BuilderPage/FilterRamType';
import Search from 'components/BuilderPage/Search';
import styles from './styles.module.scss';

type PropsType = {
  groupName: GroupName;
  filter: TypeFilterBuilder;
  filtersUsed: { [p: string]: { enable: boolean } };
  selectedComponent: TypeComponent | null;
  onUpdateFilter: ({}: TypeFilterBuilder) => void;
  onAddComponent: (group: GroupName, id: number) => void;
  onRemoveSelectedComponent: (group: GroupName) => void;
  expanded: GroupName | false;
  onChangeExpanded: (expanded: GroupName | false) => void;
};

type TypeRange = {
  minValue: number;
  maxValue: number;
};

const GroupComponent = ({
  groupName,
  filter,
  filtersUsed,
  selectedComponent,
  onUpdateFilter,
  onAddComponent,
  onRemoveSelectedComponent,
  expanded,
  onChangeExpanded,
}: PropsType): JSX.Element => {
  const countComponentsOnPage = 10;
  const [components, setComponents] = useState([] as TypeComponent[]);
  const [count, setCount] = useState(0);
  const [pagination, setPagination] = useState({ from: 0, count: countComponentsOnPage });
  const [load, setLoad] = useState(false);
  const [name, setName] = useState('');
  const [range, setRange] = useState({} as TypeRange);

  const fltersUseEffect = [
    filtersUsed[FilterName.socket] ? filter.socketIdSet : null,
    filtersUsed[FilterName.ramtype] ? filter.ramTypeIdSet : null,
    filtersUsed[FilterName.hdd] ? filter.sata : null,
    filtersUsed[FilterName.hdd] ? filter.m2 : null,
  ];

  const getFilters = () => {
    const keyRamType = groupName === GroupName.ram ? 'typeId' : 'ramTypeId';
    const querySocketId = filter.socketIdSet.size ? { socketId: [Array.from(filter.socketIdSet)].join(',') } : {};
    const queryRamTypeId = filter.ramTypeIdSet.size
      ? { [keyRamType]: [Array.from(filter.ramTypeIdSet)].join(',') }
      : {};
    const querySata = filter.sata.size ? { sata: [Array.from(filter.sata)].join(',') } : {};
    const queryM2 = filter.m2.size ? { m2: true } : {};
    const queryName = name ? { name } : {};
    const queryFilter = {
      ...querySocketId,
      ...queryRamTypeId,
      ...querySata,
      ...queryM2,
    };
    let queryRange = {};
    if (filterRangeInfo.hasOwnProperty(groupName) && filterRangeInfo[groupName].hasOwnProperty('key')) {
      queryRange = {
        [`${filterRangeInfo[groupName].key}[minValue]`]: range.minValue,
        [`${filterRangeInfo[groupName].key}[maxValue]`]: range.maxValue,
      };
    }
    return { pagination, queryFilter, queryRange, queryName };
  };

  const getComponents = async () => {
    setLoad(true);

    const { pagination, queryFilter, queryRange, queryName } = getFilters();

    try {
      const res = await servicesGetAll[groupName]({ ...pagination, ...queryFilter, ...queryRange, ...queryName });
      setComponents(res.data);
      setCount(res.meta.countAfterFiltering);
    } catch (err) {
      console.log(err); // add notification
    } finally {
      setLoad(false);
    }
  };

  function onAddComponentHandler(componentId: number) {
    onAddComponent(groupName, componentId);
    onChangeExpanded(false);
  }

  useEffect(() => {
    getComponents();
  }, [...fltersUseEffect, name, range, pagination]);

  useEffect(() => {
    if (selectedComponent) {
      const socketIdSet = selectedComponent.hasOwnProperty('socketId')
        ? new Set(filter.socketIdSet.add((selectedComponent as { socketId: number })?.socketId))
        : filter.socketIdSet;
      const ramTypeIdSet = selectedComponent.hasOwnProperty('ramTypeId')
        ? new Set(filter.ramTypeIdSet.add((selectedComponent as { ramTypeId: number })?.ramTypeId))
        : filter.ramTypeIdSet;
      const sata = selectedComponent.hasOwnProperty('sata')
        ? new Set(filter.sata.add((selectedComponent as { sata: number })?.sata))
        : filter.sata;
      const m2 = selectedComponent.hasOwnProperty('m2') ? new Set(filter.m2.add('m2')) : filter.m2;
      onUpdateFilter({
        ...filter,
        socketIdSet,
        ramTypeIdSet,
        sata,
        m2,
      });
    }
  }, [selectedComponent]);

  const listComponentElements = components?.map((component) => (
    <ListComponentsItem
      key={component.id}
      title={component.name}
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      // @ts-ignore
      specifications={SpecificationComponent[groupName]({ component })}
      // onAddComponent={() => onAddComponent(groupName, component.id)}
      onAddComponent={() => onAddComponentHandler(component.id)}
    />
  ));

  function onChangeFilterRange([minValue, maxValue]: number[]): void {
    setRange({
      ...range,
      minValue,
      maxValue,
    });
  }

  return (
    <Accordion
      className={styles.group}
      expanded={expanded === groupName}
      onChange={(ev, expanded) => onChangeExpanded(expanded ? groupName : false)}
      TransitionProps={{ unmountOnExit: true }}
    >
      <GroupItemSummary
        id={groupName}
        title={groupName}
        count={count}
        nameComponent={selectedComponent ? selectedComponent.name : ''}
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-ignore
        popupContent={selectedComponent ? SpecificationComponent[groupName]({ component: selectedComponent }) : false}
        onClear={() => onRemoveSelectedComponent(groupName)}
      />
      <AccordionDetails className={styles.details}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} xl={2}>
            <Search className={styles.search} value={name} onChange={setName} />
            {filtersUsed[FilterName.socket] && (
              <FilterSocket
                show={filtersUsed[FilterName.socket].enable}
                filter={filter}
                onUpdateFilter={onUpdateFilter}
              />
            )}
            {filtersUsed[FilterName.ramtype] && (
              <FilterRamTypes
                show={filtersUsed[FilterName.ramtype].enable}
                filter={filter}
                onUpdateFilter={onUpdateFilter}
              />
            )}
            {filtersUsed[FilterName.hdd] && (
              <FilterHddTypes
                show={filtersUsed[FilterName.hdd].enable}
                filter={filter}
                onUpdateFilter={onUpdateFilter}
              />
            )}
            {filterRangeInfo.hasOwnProperty(groupName) && filterRangeInfo[groupName].hasOwnProperty('key') && (
              <FilterRange
                title={filterRangeInfo[groupName].title ?? ''}
                min={filterRangeInfo[groupName].min ?? 0}
                max={filterRangeInfo[groupName].max ?? 100}
                step={filterRangeInfo[groupName].step ?? 1}
                dimension={filterRangeInfo[groupName].unit ?? ''}
                onChange={onChangeFilterRange}
              />
            )}
          </Grid>
          <Grid item xs={12} md={9} xl={10}>
            {listComponentElements}
            <Spinner load={load} />
            <Paginator
              countComponents={count}
              countComponentsOnPage={countComponentsOnPage}
              setPagination={setPagination}
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default GroupComponent;
