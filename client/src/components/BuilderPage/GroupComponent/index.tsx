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
import { ComponentGroups, TypeFilterBuilder, TypeGroupConfig } from 'containers/BuilderPage/types';
import styles from 'components/BuilderPage/styles.module.scss';
import { FilterName, filterRangeInfo, GroupName, servicesGetAll } from 'containers/BuilderPage/config';
import FilterRamTypes from '../FilterRamType';
// import Search from 'components/Search';
import Search from '../Search';

type PropsType = {
  cfg: TypeGroupConfig;
  // setup: TypeSetup;
  // filter: TypeFilterBuilder;
  selectedComponent: any | null;
  onUpdateFilter: ({}: TypeFilterBuilder) => void;
  onAddComponent: (group: GroupName, id: number) => void;
  onRemoveSelectedComponent: (group: GroupName) => void;
  expanded: GroupName | false | ComponentGroups; // todo: del ComponentGroups
  onChangeExpanded: (expanded: GroupName | ComponentGroups | false) => void; // todo: del ComponentGroups
  // showFilters: TypeShowFilters;
};

type TypeRange = {
  minValue: number;
  maxValue: number;
};

const GroupComponent = ({
  cfg,
  // setup,
  // filter,
  selectedComponent,
  onUpdateFilter,
  onAddComponent,
  onRemoveSelectedComponent,
  expanded,
  // showFilters,
  onChangeExpanded,
}: PropsType): JSX.Element => {
  const countComponentsOnPage = 10;
  const [components, setComponents] = useState([] as any[]);
  const [count, setCount] = useState(0);
  const [pagination, setPagination] = useState({ from: 0, count: countComponentsOnPage });
  const [load, setLoad] = useState(false);
  const [name, setName] = useState('');
  const [range, setRange] = useState({} as TypeRange);
  const [marks, setMarks] = useState([] as { value: number }[]);
  const [rangeLimits, setrangeLimits] = useState({ min: null, max: null } as {
    min: number | null;
    max: number | null;
  });

  const filter = cfg.filter;
  // const selectedComponent = setup[cfg.group];

  const getFilters = () => {
    const keyRamType = cfg.group === GroupName.ram ? 'typeId' : 'ramTypeId';
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
    if (filterRangeInfo.hasOwnProperty(cfg.group) && filterRangeInfo[cfg.group].hasOwnProperty('key')) {
      queryRange = {
        [`${filterRangeInfo[cfg.group].key}[minValue]`]: range.minValue,
        [`${filterRangeInfo[cfg.group].key}[maxValue]`]: range.maxValue,
      };
    }
    return { pagination, queryFilter, queryRange };
  };

  const getComponents = async () => {
    setLoad(true);

    const { pagination, queryFilter, queryRange } = getFilters();

    try {
      const res = await servicesGetAll[cfg.group]({ ...pagination, ...queryFilter, ...queryRange, name });
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
    const { queryFilter, queryRange } = getFilters();
    try {
      const res = await servicesGetAll[cfg.group]({ ...queryFilter, ...queryRange, name });
      if (filterRangeInfo.hasOwnProperty(cfg.group) && filterRangeInfo[cfg.group].hasOwnProperty('key')) {
        const values = (res.data as []).map((component) => component[filterRangeInfo[cfg.group].key as string]);
        const valuesSort = Array.from(new Set(values)).sort((a, b) => a - b);
        const marksSort = valuesSort.map((mk) => ({ value: mk }));
        setMarks(marksSort);
        setrangeLimits({ min: Math.min(...valuesSort), max: Math.max(...valuesSort) });
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
    getAllComponents();
  }, [filter, name, range]);

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
      specifications={SpecificationComponent[cfg.group]({ component })}
      onAddComponent={() => onAddComponent(cfg.group, component.id)}
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
      expanded={expanded === cfg.group}
      onChange={(ev, expanded) => onChangeExpanded(expanded ? cfg.group : false)}
      TransitionProps={{ unmountOnExit: true }}
    >
      <GroupItemSummary
        id={cfg.group}
        title={cfg.group}
        count={count}
        nameComponent={selectedComponent ? selectedComponent.name : ''}
        // @ts-ignore
        popupContent={selectedComponent ? SpecificationComponent[cfg.group]({ component: selectedComponent }) : false}
        onClear={() => onRemoveSelectedComponent(cfg.group)}
      />
      <AccordionDetails className={styles.details}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} md={3} xl={2}>
            <Search value={name} onChange={setName} />
            {cfg.filters[FilterName.socket] && (
              // <FilterSocket show={showFilters.socket} filter={filter} onUpdateFilter={onUpdateFilter} />
              <FilterSocket
                show={cfg.filters[FilterName.socket].enable}
                filter={filter}
                onUpdateFilter={onUpdateFilter}
              />
            )}
            {cfg.filters[FilterName.ramtype] && (
              // <FilterRamTypes show={showFilters.socket} filter={filter} onUpdateFilter={onUpdateFilter} />
              <FilterRamTypes
                show={cfg.filters[FilterName.ramtype].enable}
                filter={filter}
                onUpdateFilter={onUpdateFilter}
              />
            )}
            {filterRangeInfo.hasOwnProperty(cfg.group) && filterRangeInfo[cfg.group].hasOwnProperty('key') && (
              <FilterRange
                title={filterRangeInfo[cfg.group].title ?? ''}
                min={filterRangeInfo[cfg.group].min ?? rangeLimits.min ?? 0}
                max={filterRangeInfo[cfg.group].max ?? rangeLimits.max ?? 10}
                marks={marks}
                dimension={filterRangeInfo[cfg.group].unit ?? ''}
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
