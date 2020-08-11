import React, { useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import GroupItemSummary from '../GroupItemSummary';
import ListComponentsItem from '../ListComponentsItem';
import SpecificationField from '../SpecificationField';
import FilterSocket from '../FilterSocket';
import FilterRange from '../FilterRange';
import Paginator from '../Paginator';
import Spinner from '../Spinner';
import { getAllCpu } from '../../../services/cpuService';
import { TypeCpu } from '../../../models/typeCpu';
import { TypeFilter } from '../../../models/typeFilterBuilder';
import styles from '../styles.module.scss';

type PropsType = {
  filter: TypeFilter;
  onAddFilter: ({}: TypeFilter) => void;
  onAddComponent: ({}: TypeCpu) => void;
};

const GroupCpus = ({ filter, onAddFilter, onAddComponent }: PropsType): JSX.Element => {
  const [cpus, setCpus] = useState([] as TypeCpu[]);
  const [count, setCount] = useState(0);
  const [pagination, setPagination] = useState({ from: 0, count: 0 });
  const [load, setLoad] = useState(false);

  const getCpus = async () => {
    setLoad(true);
    try {
      const res = await getAllCpu({ ...filter, ...pagination });
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
  }, [filter, pagination]);

  const AddComponentHandler = (cpu: TypeCpu): void => {
    onAddFilter({ socketId: cpu.socketId });
    onAddComponent(cpu);
  };

  const specifications = (cpu: TypeCpu): JSX.Element => (
    <Box>
      <SpecificationField title="Vertical Segment" value={cpu.class} />
      <SpecificationField title="Processor Frequency" value={`${cpu.clockspeed / 1000}GHz`} />
      <SpecificationField title="Count cores" value={cpu.cores} />
      <SpecificationField title="Socket" value={cpu.socket.name} />
      <SpecificationField title="TDP" value={cpu.tdp} />
    </Box>
  );

  const listCpuElements = cpus.map((cpu) => (
    <ListComponentsItem
      key={cpu.id}
      title={cpu.name}
      specifications={specifications(cpu)}
      onAddComponent={() => AddComponentHandler(cpu)}
    />
  ));

  return (
    <Accordion className={styles.group} TransitionProps={{ unmountOnExit: true }}>
      <GroupItemSummary id="CPU" title="CPU" count={count} />
      <AccordionDetails className={styles.details}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} md={3} xl={2}>
            <FilterSocket filter={filter} onAddFilter={onAddFilter} />
            <FilterRange title="Processor Frequency" min={1000} max={3000} dimension="MHz" onChange={() => {}} />
          </Grid>
          <Grid item xs={12} sm={8} md={9} xl={10}>
            {listCpuElements}
            <Spinner load={load} />
            <Paginator countComponents={count} setPagination={setPagination} />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default GroupCpus;
