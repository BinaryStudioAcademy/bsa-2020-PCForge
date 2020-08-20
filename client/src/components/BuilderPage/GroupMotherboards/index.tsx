import React, { useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import GroupItemSummary from 'components/BuilderPage/GroupItemSummary';
import ListComponentsItem from 'components/BuilderPage/ListComponentsItem';
import FilterSocket from 'components/BuilderPage/FilterSocket';
import FilterRamTypes from 'components/BuilderPage/FilterRamType';
import Paginator from 'components/Paginator';
import Spinner from 'components/Spinner';
import { SpecificationMotherboard } from 'components/BuilderPage/Specifications';
import { getAllMotherboard } from 'api/services/motherboardService';
import { TypeMotherboard } from 'common/models/typeMotherboard';
import { ComponentGroups, TypeFilterBuilder, TypeShowFilters } from 'containers/BuilderPage/types';
import styles from 'components/BuilderPage/styles.module.scss';

type PropsType = {
  filter: TypeFilterBuilder;
  selectedComponent: TypeMotherboard | null;
  onUpdateFilter: (filter: TypeFilterBuilder) => void;
  onAddComponent: (motherboard: TypeMotherboard) => void;
  onRemoveSelectedComponent: () => void;
  expanded: boolean;
  onChangeExpanded: (expanded: ComponentGroups | false) => void;
  showFilters: TypeShowFilters;
};

const GroupMotherboards = ({
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

  useEffect(() => {
    if (selectedComponent) {
      onUpdateFilter({
        ...filter,
        socketIdSet: new Set(filter.socketIdSet.add(selectedComponent.socketId)),
        ramTypeIdSet: new Set(filter.ramTypeIdSet.add(selectedComponent.ramTypeId)),
      });
    }
  }, [selectedComponent]);

  const listMotherboardElements = motherboards?.map((motherboard) => (
    <ListComponentsItem
      key={motherboard.id}
      title={motherboard.name}
      specifications={<SpecificationMotherboard motherboard={motherboard} />}
      onAddComponent={() => onAddComponent(motherboard)}
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
        popupContent={selectedComponent ? <SpecificationMotherboard motherboard={selectedComponent} /> : false}
        onClear={onRemoveSelectedComponent}
      />
      <AccordionDetails className={styles.details}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} md={3} xl={2}>
            <FilterSocket show={showFilters.socket} filter={filter} onUpdateFilter={onUpdateFilter} />
            <FilterRamTypes show={showFilters.ramType} filter={filter} onUpdateFilter={onUpdateFilter} />
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
