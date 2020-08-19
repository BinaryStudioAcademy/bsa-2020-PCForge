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
import { SpecificationComponent, SpecificationCpu } from 'components/BuilderPage/Specifications';
import { getAllCpu } from 'api/services/cpuService';
import { TypeCpu } from 'common/models/typeCpu';
import { ComponentGroups, TypeFilterBuilder, TypeShowFilters } from 'containers/BuilderPage/types';
import styles from 'components/BuilderPage/styles.module.scss';
import { Group } from '../../../containers/BuilderPage/config';
import { getAllGpu } from '../../../api/services/gpuService';
import { getAllRam } from '../../../api/services/ramService';
import { getAllMotherboard } from '../../../api/services/motherboardService';
import { getAllPowersupplies } from '../../../api/services/powersupplyService';
import { TypeSetup } from '../../../containers/BuilderPage/reducer';

const servicesGetAll = {
  [Group.cpu]: getAllCpu,
  [Group.gpu]: getAllGpu,
  [Group.ram]: getAllRam,
  [Group.motherboard]: getAllMotherboard,
  [Group.powersupply]: getAllPowersupplies,
};

type PropsType = {
  cfg: {
    group: Group;
    filterRange: {
      title: string;
      min: number;
      max: number;
      step: number;
      dimension: string;
      key: string;
    } | null;
  };
  setup: TypeSetup;
  filter: TypeFilterBuilder;
  // selectedComponent: TypeCpu | null;
  onUpdateFilter: ({}: TypeFilterBuilder) => void;
  onAddComponent: (group: Group, id: number) => void;
  onRemoveSelectedComponent: (group: Group) => void;
  expanded: Group | false | ComponentGroups; // todo: del ComponentGroups
  onChangeExpanded: (expanded: Group | ComponentGroups | false) => void; // todo: del ComponentGroups
  showFilters: TypeShowFilters;
};

type TypeRange = {
  minValue: number;
  maxValue: number;
};

const GroupComponent = ({
  cfg,
  setup,
  filter,
  // selectedComponent,
  onUpdateFilter,
  onAddComponent,
  onRemoveSelectedComponent,
  expanded,
  onChangeExpanded,
  showFilters,
}: PropsType): JSX.Element => {
  const countComponentsOnPage = 10;
  const [components, setComponents] = useState([] as any[]);
  const [count, setCount] = useState(0);
  const [pagination, setPagination] = useState({ from: 0, count: countComponentsOnPage });
  const [load, setLoad] = useState(false);
  const [range, setRange] = useState({} as TypeRange);

  const selectedComponent = setup[cfg.group];

  const getComponents = async () => {
    setLoad(true);
    // const queryFilter = filter.socketIdSet.size ? { socketId: [Array.from(filter.socketIdSet)].join(',') } : {};
    let queryRange = {};
    if (cfg.filterRange) {
      queryRange = {
        [`${cfg.filterRange.key}[minValue]`]: range.minValue,
        [`${cfg.filterRange.key}[maxValue]`]: range.maxValue,
      };
    }

    try {
      const res = await servicesGetAll[cfg.group]({ ...pagination, ...queryRange });
      setComponents(res.data);
      setCount(res.meta.countAfterFiltering);
    } catch (err) {
      console.log(err); // add notification
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getComponents();
  }, [filter, pagination]);

  // useEffect(() => {
  //   if (selectedComponent) {
  //     onUpdateFilter({
  //       ...filter,
  //       socketIdSet: new Set(filter.socketIdSet.add(selectedComponent.socketId)),
  //     });
  //   }
  // }, [selectedComponent]);

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
            <FilterSocket show={showFilters.socket} filter={filter} onUpdateFilter={onUpdateFilter} />
            {cfg.filterRange && (
              <FilterRange
                title={cfg.filterRange.title}
                min={cfg.filterRange.min}
                max={cfg.filterRange.max}
                dimension={cfg.filterRange.dimension}
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
