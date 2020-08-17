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
import { SpecificationCpu } from 'components/BuilderPage/Specifications';
import { getAllCpu } from 'api/services/cpuService';
import { TypeCpu } from 'common/models/typeCpu';
import { ComponentGroups, TypeFilterBuilder, TypeShowFilters } from 'containers/BuilderPage/types';
import styles from 'components/BuilderPage/styles.module.scss';
import Search from 'components/Search';

type PropsType = {
  filter: TypeFilterBuilder;
  selectedComponent: TypeCpu | null;
  onUpdateFilter: ({}: TypeFilterBuilder) => void;
  onAddComponent: ({}: TypeCpu) => void;
  onRemoveSelectedComponent: () => void;
  expanded: boolean;
  onChangeExpanded: (expanded: ComponentGroups | false) => void;
  showFilters: TypeShowFilters;
};

type TypeClockspeed = {
  minValue: number;
  maxValue: number;
};

const GroupCpus = ({
  filter,
  selectedComponent,
  onUpdateFilter,
  onAddComponent,
  onRemoveSelectedComponent,
  expanded,
  onChangeExpanded,
  showFilters,
}: PropsType): JSX.Element => {
  const countComponentsOnPage = 10;
  const minClockspeed = 1000;
  const maxClockspeed = 5000;
  const [cpus, setCpus] = useState([] as TypeCpu[]);
  const [count, setCount] = useState(0);
  const [pagination, setPagination] = useState({ from: 0, count: countComponentsOnPage });
  const [clockspeed, setClockspeed] = useState({} as TypeClockspeed);
  const [name, setName] = useState('');
  const [load, setLoad] = useState(false);

  const getCpus = async () => {
    setLoad(true);
    const queryFilter = filter.socketIdSet.size ? { socketId: [Array.from(filter.socketIdSet)].join(',') } : {};
    const queryClockspeed = {
      'clockspeed[minValue]': clockspeed.minValue,
      'clockspeed[maxValue]': clockspeed.maxValue,
    };
    try {
      const res = await getAllCpu({ ...queryFilter, ...pagination, ...queryClockspeed, name });
      setCpus(res.data);
      setCount(res.meta.countAfterFiltering);
    } catch (err) {
      console.log(err); // add notification
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getCpus();
  }, [filter, pagination, clockspeed, name]);

  useEffect(() => {
    if (selectedComponent) {
      onUpdateFilter({
        ...filter,
        socketIdSet: new Set(filter.socketIdSet.add(selectedComponent.socketId)),
      });
    }
  }, [selectedComponent]);

  const listCpuElements = cpus?.map((cpu) => (
    <ListComponentsItem
      key={cpu.id}
      title={cpu.name}
      specifications={<SpecificationCpu cpu={cpu} />}
      onAddComponent={() => onAddComponent(cpu)}
    />
  ));

  function onChangeFilterRange([minValue, maxValue]: number[]): void {
    setClockspeed({
      ...clockspeed,
      minValue,
      maxValue,
    });
  }

  return (
    <Accordion
      className={styles.group}
      expanded={expanded}
      onChange={(ev, expanded) => onChangeExpanded(expanded ? ComponentGroups.cpu : false)}
      TransitionProps={{ unmountOnExit: true }}
    >
      <GroupItemSummary
        id="CPU"
        title="CPU"
        count={count}
        nameComponent={selectedComponent ? selectedComponent.name : ''}
        popupContent={selectedComponent ? <SpecificationCpu cpu={selectedComponent} /> : false}
        onClear={onRemoveSelectedComponent}
      />
      <AccordionDetails className={styles.details}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} md={3} xl={2}>
            <Search className={styles.search} value={name} onChange={(e) => setName(e.target.value)} />
            <FilterSocket show={showFilters.socket} filter={filter} onUpdateFilter={onUpdateFilter} />
            <FilterRange
              title="Processor Frequency"
              min={minClockspeed}
              max={maxClockspeed}
              step={100}
              dimension="MHz"
              onChange={onChangeFilterRange}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={9} xl={10}>
            {listCpuElements}
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

export default GroupCpus;
