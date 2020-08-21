import React, { useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import GroupItemSummary from 'components/BuilderPage/GroupItemSummary';
import ListComponentsItem from 'components/BuilderPage/ListComponentsItem';
import FilterSocket from 'components/BuilderPage/FilterSocket';
import FilterRange from 'components/BuilderPage/FilterRange';
import Paginator from 'components/Paginator';
import Spinner from 'components/Spinner';
import { SpecificationComponent } from 'components/BuilderPage/Specifications';
import { ComponentGroups, TypeComponent, TypeFilterBuilder} from 'containers/BuilderPage/types';
import { FilterName, filterRangeInfo, GroupName, servicesGetAll } from 'containers/BuilderPage/config';
import FilterRamTypes from '../FilterRamType';
import Search from '../Search';
import styles from './styles.module.scss';

type PropsType = {
  groupName: GroupName;
  filter: TypeFilterBuilder;
  filtersUsed: { [p: string]: { enable: boolean } };
  selectedComponent: TypeComponent | null;
  onUpdateFilter: ({}: TypeFilterBuilder) => void;
  onAddComponent: (group: GroupName, id: number) => void;
  onRemoveSelectedComponent: (group: GroupName) => void;
  expanded: GroupName | false | ComponentGroups; // todo: del ComponentGroups
  onChangeExpanded: (expanded: GroupName | ComponentGroups | false) => void; // todo: del ComponentGroups
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
  const [marks, setMarks] = useState([] as { value: number }[]);
  const [rangeLimits, setRangeLimits] = useState({ min: null, max: null } as {
    min: number | null;
    max: number | null;
  });

  const getFilters = () => {
    const keyRamType = groupName === GroupName.ram ? 'typeId' : 'ramTypeId';
    const querySocketId = filter.socketIdSet.size ? { socketId: [Array.from(filter.socketIdSet)].join(',') } : {};
    const queryRamTypeId = filter.ramTypeIdSet.size
      ? { [keyRamType]: [Array.from(filter.ramTypeIdSet)].join(',') }
      : {};
    const queryFilter = {
      ...querySocketId,
      ...queryRamTypeId,
    };
    // const queryFilter = {
    //   socketId: filter.socketIdSet.size ? [Array.from(filter.socketIdSet)].join(',') : '',
    //   ramTypeId: filter.ramTypeIdSet.size ? [Array.from(filter.ramTypeIdSet)].join(',') : '',
    // };
    let queryRange = {};
    if (filterRangeInfo.hasOwnProperty(groupName) && filterRangeInfo[groupName].hasOwnProperty('key')) {
      queryRange = {
        [`${filterRangeInfo[groupName].key}[minValue]`]: range.minValue,
        [`${filterRangeInfo[groupName].key}[maxValue]`]: range.maxValue,
      };
    }
    return { pagination, queryFilter, queryRange };
  };

  const getComponents = async () => {
    setLoad(true);

    const { pagination, queryFilter, queryRange } = getFilters();

    try {
      const res = await servicesGetAll[groupName]({ ...pagination, ...queryFilter, ...queryRange, name });
      console.log('res', res);
      setComponents(res.data);
      setCount(res.meta.countAfterFiltering);
    } catch (err) {
      console.log(err); // add notification
    } finally {
      setLoad(false);
    }
  };

  const getAllComponents = async () => {
    const { queryFilter } = getFilters();
    try {
      const res = await servicesGetAll[groupName]({ ...queryFilter, name });
      if (filterRangeInfo.hasOwnProperty(groupName) && filterRangeInfo[groupName].hasOwnProperty('key')) {
        const values = (res.data as []).map((component) => component[filterRangeInfo[groupName].key as string]);
        const valuesSort = Array.from(new Set(values));
        valuesSort.sort((a, b) => a - b);
        // const valuesSort = Array.from(new Set(values)).sort((a, b) => a - b);
        const marksSort = valuesSort.map((mk) => ({ value: mk }));
        const min = Math.min(...valuesSort);
        const max = Math.max(...valuesSort);
        setMarks(marksSort);
        setRangeLimits({ min, max });
        // setRange({
        //   minValue: range.minValue < min ? min : range.minValue,
        //   maxValue: range.maxValue > max ? max : range.maxValue,
        // });
        setRange({
          minValue: min,
          maxValue: max,
        });
      }

      setComponents(res.data);
      setCount(res.meta.countAfterFiltering);
    } catch (err) {
      console.log(err); // add notification
    }
  };

  useEffect(() => {
    getComponents();
  }, [filter, name, range, pagination]);

  useEffect(() => {
    if (selectedComponent) {
      const socketIdSet = selectedComponent.hasOwnProperty('socketId')
        ? new Set(filter.socketIdSet.add((selectedComponent as { socketId: number })?.socketId))
        : filter.socketIdSet;
      const ramTypeIdSet = selectedComponent.hasOwnProperty('ramTypeId')
        ? new Set(filter.ramTypeIdSet.add((selectedComponent as { ramTypeId: number })?.ramTypeId))
        : filter.ramTypeIdSet;
      onUpdateFilter({
        ...filter,
        socketIdSet,
        ramTypeIdSet,
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
      onAddComponent={() => onAddComponent(groupName, component.id)}
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
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} md={3} xl={2}>
            <Search className={styles.search} value={name} onChange={setName} />
            {filtersUsed[FilterName.socket] && (
              // <FilterSocket show={showFilters.socket} filter={filter} onUpdateFilter={onUpdateFilter} />
              <FilterSocket
                show={filtersUsed[FilterName.socket].enable}
                filter={filter}
                onUpdateFilter={onUpdateFilter}
              />
            )}
            {filtersUsed[FilterName.ramtype] && (
              // <FilterRamTypes show={showFilters.socket} filter={filter} onUpdateFilter={onUpdateFilter} />
              <FilterRamTypes
                show={filtersUsed[FilterName.ramtype].enable}
                filter={filter}
                onUpdateFilter={onUpdateFilter}
              />
            )}
            {filterRangeInfo.hasOwnProperty(groupName) && filterRangeInfo[groupName].hasOwnProperty('key') && (
              <FilterRange
                title={filterRangeInfo[groupName].title ?? ''}
                min={filterRangeInfo[groupName].min ?? rangeLimits.min ?? 0}
                max={filterRangeInfo[groupName].max ?? rangeLimits.max ?? 10}
                step={filterRangeInfo[groupName].step}
                marks={marks}
                dimension={filterRangeInfo[groupName].unit ?? ''}
                onChange={onChangeFilterRange}
              />
            )}
          </Grid>
          <Grid item xs={12} sm={8} md={9} xl={10}>
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
