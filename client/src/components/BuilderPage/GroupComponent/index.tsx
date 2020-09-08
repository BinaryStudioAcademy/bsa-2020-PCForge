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
import { TypeStorage } from 'common/models/typeStorage';
import { FilterName, filterRangeInfo, GroupName, servicesGetAll } from 'containers/BuilderPage/config';
import FilterRamTypes from 'components/BuilderPage/FilterRamType';
import Search from 'components/BuilderPage/Search';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { TypeSetup } from '../../../containers/BuilderPage/reducer';

type PropsType = {
  groupName: GroupName;
  filter: TypeFilterBuilder;
  filtersUsed: { [p: string]: { enable: boolean } };
  // selectedComponent: TypeComponent | null | any;
  // selectedComponent: { [p: string]: TypeComponent | null };
  onUpdateFilter: ({}: TypeFilterBuilder) => void;
  onAddComponent: (group: GroupName, id: number) => void;
  onRemoveSelectedComponent: (group: GroupName) => void;
  expanded: GroupName | false;
  onChangeExpanded: (expanded: GroupName | false) => void;
  count?: number;
  countHandler?: (value: number) => void;
};

type TypeRange = {
  minValue: number;
  maxValue: number;
};

const GroupComponent = ({
  groupName,
  filter,
  filtersUsed,
  // selectedComponent,
  onUpdateFilter,
  onAddComponent,
  onRemoveSelectedComponent,
  expanded,
  onChangeExpanded,
  count,
  countHandler,
}: PropsType): JSX.Element => {
  const countComponentsOnPage = 10;
  const [components, setComponents] = useState([] as TypeComponent[]);
  const [counter, setCounter] = useState(0);
  const [pagination, setPagination] = useState({ from: 0, count: countComponentsOnPage });
  const [load, setLoad] = useState(false);
  const [name, setName] = useState('');
  const [range, setRange] = useState({} as TypeRange);

  const setup = useSelector((state: { setup: TypeSetup }) => state.setup);
  // const selectedComponent = groupName===GroupName.storage?[setup[GroupName.ssd]]
  const selectedComponent =
    groupName !== GroupName.storage
      ? { [groupName]: setup[groupName] }
      : { [GroupName.ssd]: setup[GroupName.ssd], [GroupName.hdd]: setup[GroupName.hdd] };

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

    console.log('query', { ...pagination, ...queryFilter, ...queryRange, ...queryName });

    try {
      const res = await servicesGetAll[groupName]({ ...pagination, ...queryFilter, ...queryRange, ...queryName });
      setComponents(res.data);
      setCounter(res.meta.countAfterFiltering);
    } catch (err) {
      console.log(err); // add notification
    } finally {
      setLoad(false);
    }
  };

  function onAddComponentHandler(component: TypeComponent) {
    const group =
      groupName !== GroupName.storage
        ? groupName
        : (component as TypeStorage).type === GroupName.ssd
        ? GroupName.ssd
        : GroupName.hdd;
    onAddComponent(group, component.id);
    onChangeExpanded(false);
  }

  useEffect(() => {
    console.log('range: ', range);
    getComponents();
  }, [...fltersUseEffect, name, range, pagination]);

  useEffect(() => {
    for (const component of Object.values(selectedComponent)) {
      if (component) {
        const socketIdSet = component.hasOwnProperty('socketId')
          ? new Set(filter.socketIdSet.add((component as { socketId: number })?.socketId))
          : filter.socketIdSet;
        const ramTypeIdSet = component.hasOwnProperty('ramTypeId')
          ? new Set(filter.ramTypeIdSet.add((component as { ramTypeId: number })?.ramTypeId))
          : filter.ramTypeIdSet;
        const sata = component.hasOwnProperty('sata')
          ? new Set(filter.sata.add((component as { sata: number })?.sata))
          : filter.sata;
        const m2 = component.hasOwnProperty('m2') ? new Set(filter.m2.add('m2')) : filter.m2;
        onUpdateFilter({
          ...filter,
          socketIdSet,
          ramTypeIdSet,
          sata,
          m2,
        });
      }
    }
    // if (selectedComponent) {
    //   const socketIdSet = selectedComponent.hasOwnProperty('socketId')
    //     ? new Set(filter.socketIdSet.add((selectedComponent as { socketId: number })?.socketId))
    //     : filter.socketIdSet;
    //   const ramTypeIdSet = selectedComponent.hasOwnProperty('ramTypeId')
    //     ? new Set(filter.ramTypeIdSet.add((selectedComponent as { ramTypeId: number })?.ramTypeId))
    //     : filter.ramTypeIdSet;
    //   const sata = selectedComponent.hasOwnProperty('sata')
    //     ? new Set(filter.sata.add((selectedComponent as { sata: number })?.sata))
    //     : filter.sata;
    //   const m2 = selectedComponent.hasOwnProperty('m2') ? new Set(filter.m2.add('m2')) : filter.m2;
    //   onUpdateFilter({
    //     ...filter,
    //     socketIdSet,
    //     ramTypeIdSet,
    //     sata,
    //     m2,
    //   });
    // }
  }, [...Object.values(selectedComponent)]);

  useEffect(() => {
    console.log('components: ', components);
  }, [components]);

  const listComponentElements = components?.map((component) => (
    <ListComponentsItem
      key={component.id + groupName + component.name}
      title={component.name}
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      // @ts-ignore
      specifications={SpecificationComponent[groupName]({ component })}
      onAddComponent={() => onAddComponentHandler(component)}
      isSelected={
        groupName !== GroupName.storage
          ? Object.values(selectedComponent)[0]?.id === component.id
          : !!Object.entries(selectedComponent).find(
              (e) => e[0] == (component as TypeStorage)?.type && e[1]?.id === component.id
            )
      }
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
        count={counter}
        selectedComponent={selectedComponent}
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-ignore
        // popupContent={selectedComponent ? SpecificationComponent[groupName]({ component: selectedComponent }) : false}
        popupContent={false}
        onClear={(gpName) => onRemoveSelectedComponent(gpName)}
        total={count}
        totalHandler={countHandler}
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
              countComponents={counter}
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
