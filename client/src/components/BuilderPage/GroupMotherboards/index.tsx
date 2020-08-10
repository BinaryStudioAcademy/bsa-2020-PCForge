import React, { useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import GroupItemSummary from '../GroupItemSummary';
import ListComponentsItem from '../ListComponentsItem';
import SpecificationField from '../SpecificationField';
import FilterSocket from '../FilterSocket';
import FilterRamTypes from '../FilterRamType';
import Paginator from '../Paginator';
import Spinner from '../Spinner';
import { getAllMotherboard } from '../../../services/motherboardService';
import { TypeMotherboard } from '../../../models/typeMotherboard';
import { TypeFilter } from '../../../models/typeFilter';
import styles from '../styles.module.scss';

type PropsType = {
  filter: TypeFilter;
  onAddFilter: ({}: TypeFilter) => void;
  onAddComponent: ({}: TypeMotherboard) => void;
};

const GroupMotherboards = ({ filter, onAddFilter, onAddComponent }: PropsType): JSX.Element => {
  const [motherboards, setMotherboards] = useState([] as TypeMotherboard[]);
  const [count, setCount] = useState(0);
  const [pagination, setPagination] = useState({ from: 0, count: 0 });
  const [load, setLoad] = useState(false);

  const getAllMotherboards = async () => {
    setLoad(true);
    try {
      const allMotherboards = await getAllMotherboard(filter);
      setCount(allMotherboards?.length);
      getMotherboards();
    } catch (err) {
      console.log(err); // add notification
      setLoad(false);
    }
  };

  const getMotherboards = async () => {
    setLoad(true);
    try {
      const newMotherboards = await getAllMotherboard({ ...filter, ...pagination });
      setMotherboards(newMotherboards);
    } catch (err) {
      console.log(err); // add notification
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getAllMotherboards();
  }, [filter]);

  useEffect(() => {
    getMotherboards();
  }, [pagination]);

  const AddComponentHandler = (motherboard: TypeMotherboard): void => {
    onAddFilter({ socketId: motherboard.socketId });
    onAddFilter({ ramTypeId: motherboard.ramTypeId });
    onAddComponent(motherboard);
  };

  const specifications = (motherboard: TypeMotherboard): JSX.Element => (
    <Box>
      <SpecificationField title="Socket" value={motherboard.socket.name} />
      <SpecificationField title="Ram type" value={motherboard.ramType.name} />
    </Box>
  );

  const listMotherboardElements = motherboards.map((motherboard) => (
    <ListComponentsItem
      key={motherboard.id}
      title={motherboard.name}
      specifications={specifications(motherboard)}
      onAddComponent={() => AddComponentHandler(motherboard)}
    />
  ));

  return (
    <Accordion className={styles.group} TransitionProps={{ unmountOnExit: true }}>
      <GroupItemSummary id="Motherboard" title="Motherboard" count={count} />
      <AccordionDetails className={styles.details}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} md={3} xl={2}>
            <FilterSocket filter={filter} onAddFilter={onAddFilter} />
            <FilterRamTypes filter={filter} onAddFilter={onAddFilter} />
          </Grid>
          <Grid item xs={12} sm={8} md={9} xl={10}>
            {listMotherboardElements}
            <Spinner load={load} />
            <Paginator countComponents={count} setPagination={setPagination} />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default GroupMotherboards;
