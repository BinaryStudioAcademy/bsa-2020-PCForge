import React, { useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import GroupItemSummary from 'components/BuilderPage/GroupItemSummary';
import ListComponentsItem from 'components/BuilderPage/ListComponentsItem';
import SpecificationField from 'components/BuilderPage/SpecificationField';
import FilterSocket from 'components/BuilderPage/FilterSocket';
import FilterRamTypes from 'components/BuilderPage/FilterRamType';
import Paginator from 'components/Paginator';
import Spinner from 'components/Spinner';
import { getAllMotherboard } from 'api/services/motherboardService';
import { TypeMotherboard } from 'common/models/typeMotherboard';
import { TypeFilter } from 'common/models/typeFilterBuilder';
import styles from 'components/BuilderPage/styles.module.scss';

type PropsType = {
  filter: TypeFilter;
  selectedComponent: TypeMotherboard | null;
  onAddFilter: ({}: TypeFilter) => void;
  onAddComponent: ({}: TypeMotherboard) => void;
  onRemoveSelectedComponent: () => void;
};

const GroupMotherboards = ({
  filter,
  selectedComponent,
  onAddFilter,
  onAddComponent,
  onRemoveSelectedComponent,
}: PropsType): JSX.Element => {
  const countComponentsOnPage = 10;
  const [motherboards, setMotherboards] = useState([] as TypeMotherboard[]);
  const [count, setCount] = useState(0);
  const [pagination, setPagination] = useState({ from: 0, count: countComponentsOnPage });
  const [load, setLoad] = useState(false);

  const getMotherboards = async () => {
    setLoad(true);
    const { socketId, ramTypeId } = filter;
    try {
      const res = await getAllMotherboard({ socketId, ramTypeId, ...pagination });
      setMotherboards(res.data);
      setCount(res.meta.countAfterFiltering);
    } catch (err) {
      console.log(err); // add notification
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getMotherboards();
  }, [filter, pagination]);

  const AddComponentHandler = (motherboard: TypeMotherboard): void => {
    onAddFilter({
      ...filter,
      socketId: motherboard.socketId,
      ramTypeId: motherboard.ramTypeId,
    });
    onAddComponent(motherboard);
  };

  const specifications = (motherboard: TypeMotherboard): JSX.Element => (
    <Box>
      <SpecificationField title="Socket" value={motherboard.socket.name} />
      <SpecificationField title="Ram type" value={motherboard.ramType.name} />
    </Box>
  );

  const listMotherboardElements = motherboards?.map((motherboard) => (
    <ListComponentsItem
      key={motherboard.id}
      title={motherboard.name}
      specifications={specifications(motherboard)}
      onAddComponent={() => AddComponentHandler(motherboard)}
    />
  ));

  return (
    <Accordion className={styles.group} TransitionProps={{ unmountOnExit: true }}>
      <GroupItemSummary
        id="Motherboard"
        title="Motherboard"
        count={count}
        nameComponent={selectedComponent ? selectedComponent.name : ''}
        onClear={onRemoveSelectedComponent}
      />
      <AccordionDetails className={styles.details}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} md={3} xl={2}>
            <FilterSocket filter={filter} onAddFilter={onAddFilter} />
            <FilterRamTypes filter={filter} onAddFilter={onAddFilter} />
          </Grid>
          <Grid item xs={12} sm={8} md={9} xl={10}>
            {listMotherboardElements}
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

export default GroupMotherboards;
