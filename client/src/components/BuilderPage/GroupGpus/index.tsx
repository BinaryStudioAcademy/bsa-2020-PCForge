import React, { useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SpecificationField from '../SpecificationField';
import ListComponentsItem from '../ListComponentsItem';
import GroupItemSummary from '../GroupItemSummary';
import Paginator from '../Paginator';
import FilterRange from '../FilterRange';
import Spinner from '../Spinner';
import { getAllGpu } from '../../../services/gpuService';
import { TypeGpu } from '../../../models/typeGpu';
import { TypeFilter } from '../../../models/typeFilter';
import styles from '../styles.module.scss';

type PropsType = {
  filter: TypeFilter;
  onAddFilter: ({}: TypeFilter) => void;
  onAddComponent: ({}: TypeGpu) => void;
};

const GroupGpus = ({ filter, onAddFilter, onAddComponent }: PropsType): JSX.Element => {
  const [gpus, setGpus] = useState([] as TypeGpu[]);
  const [count, setCount] = useState(0);
  const [pagination, setPagination] = useState({ from: 0, count: 0 });
  const [load, setLoad] = useState(false);

  const getAllGpus = async () => {
    setLoad(true);
    try {
      const allGpus = await getAllGpu(filter);
      setCount(allGpus?.length);
      getGpus();
    } catch (err) {
      console.log(err); // add notification
      setLoad(false);
    }
  };

  const getGpus = async () => {
    setLoad(true);
    try {
      const newGpus = await getAllGpu({ ...filter, ...pagination });
      // setGpus(newGpus);
      setGpus(newGpus.length > 10 ? newGpus.slice(0, 9) : newGpus); // while the bug is on the server
    } catch (err) {
      console.log(err); // add notification
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getAllGpus();
  }, [filter]);

  useEffect(() => {
    getGpus();
  }, [pagination]);

  const AddComponentHandler = (gpu: TypeGpu): void => {
    onAddComponent(gpu);
  };

  const specifications = (gpu: TypeGpu): JSX.Element => (
    <Box>
      <SpecificationField title="Bus interface" value={gpu.interface} />
      <SpecificationField title="Memory size" value={gpu.memorySize} />
      <SpecificationField title="OpenGL" value={gpu.opengl} />
      <SpecificationField title="TDP" value={gpu.tdp} />
    </Box>
  );

  const listGpuElements = gpus.map((gpu) => (
    <ListComponentsItem
      key={gpu.id}
      title={gpu.name}
      specifications={specifications(gpu)}
      onAddComponent={() => AddComponentHandler(gpu)}
    />
  ));

  return (
    <Accordion className={styles.group} TransitionProps={{ unmountOnExit: true }}>
      <GroupItemSummary id="GPU" title="GPU" count={count} />
      <AccordionDetails className={styles.details}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} md={3} xl={2}>
            <FilterRange title="Memory size" min={32} max={2048} dimension="Mb" onChange={() => {}} />
          </Grid>
          <Grid item xs={12} sm={8} md={9} xl={10}>
            {listGpuElements}
            <Spinner load={load} />
            <Paginator countComponents={count} setPagination={setPagination} />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default GroupGpus;
