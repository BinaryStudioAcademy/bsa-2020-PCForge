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
import { ComponentGroups, TypeFilterBuilder } from 'containers/BuilderPage/types';
import styles from 'components/BuilderPage/styles.module.scss';

type PropsType = {
  filter: TypeFilterBuilder;
  selectedComponent: TypeMotherboard | null;
  onAddFilter: ({}: TypeFilterBuilder) => void;
  onAddComponent: ({}: TypeMotherboard) => void;
  onRemoveSelectedComponent: () => void;
  expanded: boolean;
  onChangeExpanded: (expanded: ComponentGroups | false) => void;
};

const GroupMotherboards = ({
  filter,
  selectedComponent,
  onAddFilter,
  onAddComponent,
  onRemoveSelectedComponent,
  expanded,
  onChangeExpanded,
}: PropsType): JSX.Element => {
  const countComponentsOnPage = 10;
  const [motherboards, setMotherboards] = useState([] as TypeMotherboard[]);
  const [count, setCount] = useState(0);
  const [pagination, setPagination] = useState({ from: 0, count: countComponentsOnPage });
  const [load, setLoad] = useState(false);

  const getMotherboards = async () => {
    setLoad(true);
    const queryFilterSocket = filter.socketIdSet.size ? { socketId: [Array.from(filter.socketIdSet)].join(',') } : {};
    const queryFilterRam = filter.ramTypeIdSet.size ? { ramTypeId: [Array.from(filter.ramTypeIdSet)].join(',') } : {};
    const queryFilter = { ...queryFilterSocket, ...queryFilterRam };
    try {
      const res = await getAllMotherboard({ ...queryFilter, ...pagination });
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
      socketIdSet: new Set(filter.socketIdSet.add(motherboard.socketId)),
      ramTypeIdSet: new Set(filter.ramTypeIdSet.add(motherboard.ramTypeId)),
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
    <Accordion
      className={styles.group}
      expanded={expanded}
      onChange={(ev, expanded) => onChangeExpanded(expanded ? ComponentGroups.motherboard : false)}
      TransitionProps={{ unmountOnExit: true }}
    >
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
