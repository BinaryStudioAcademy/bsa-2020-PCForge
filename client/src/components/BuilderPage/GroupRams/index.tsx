import React, { useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import GroupItemSummary from 'components/BuilderPage/GroupItemSummary';
import ListComponentsItem from 'components/BuilderPage/ListComponentsItem';
import FilterRamTypes from 'components/BuilderPage/FilterRamType';
import FilterRange from 'components/BuilderPage/FilterRange';
import Paginator from 'components/Paginator';
import Spinner from 'components/Spinner';
import { SpecificationRam } from 'components/BuilderPage/Specifications';
import { getAllRam } from 'api/services/ramService';
import { TypeRam } from 'common/models/typeRam';
import { ComponentGroups, TypeFilterBuilder, TypeShowFilters } from 'containers/BuilderPage/types';
import styles from 'components/BuilderPage/styles.module.scss';

type PropsType = {
  filter: TypeFilterBuilder;
  selectedComponent: TypeRam | null;
  onUpdateFilter: ({}: TypeFilterBuilder) => void;
  onAddComponent: ({}: TypeRam) => void;
  onRemoveSelectedComponent: () => void;
  expanded: boolean;
  onChangeExpanded: (expanded: ComponentGroups | false) => void;
  showFilters: TypeShowFilters;
};

const GroupRams = ({
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
  const [rams, setRams] = useState([] as TypeRam[]);
  const [count, setCount] = useState(0);
  const [pagination, setPagination] = useState({ from: 0, count: countComponentsOnPage });
  const [load, setLoad] = useState(false);

  const getRams = async () => {
    setLoad(true);
    const queryFilter = filter.ramTypeIdSet.size ? { typeId: [Array.from(filter.ramTypeIdSet)].join(',') } : {};
    try {
      const res = await getAllRam({ ...queryFilter, ...pagination });
      setRams(res.data);
      setCount(res.meta.countAfterFiltering);
    } catch (err) {
      console.log(err); // add notification
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getRams();
  }, [filter, pagination]);

  useEffect(() => {
    if (selectedComponent) {
      onUpdateFilter({
        ...filter,
        ramTypeIdSet: new Set(filter.ramTypeIdSet.add(selectedComponent.typeId)),
      });
    }
  }, [selectedComponent]);

  const listRamElements = rams?.map((ram) => (
    <ListComponentsItem
      key={ram.id}
      title={ram.name}
      specifications={<SpecificationRam ram={ram} />}
      onAddComponent={() => onAddComponent(ram)}
    />
  ));

  function onChangeFilterRange() {
    // do nothing.
  }

  return (
    <Accordion
      className={styles.group}
      expanded={expanded}
      onChange={(ev, expanded) => onChangeExpanded(expanded ? ComponentGroups.ram : false)}
      TransitionProps={{ unmountOnExit: true }}
    >
      <GroupItemSummary
        id="RAM"
        title="RAM"
        count={count}
        nameComponent={selectedComponent ? selectedComponent.name : ''}
        popupContent={selectedComponent ? <SpecificationRam ram={selectedComponent} /> : false}
        onClear={onRemoveSelectedComponent}
      />
      <AccordionDetails className={styles.details}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} md={3} xl={2}>
            <FilterRamTypes show={showFilters.ramType} filter={filter} onUpdateFilter={onUpdateFilter} />
            <FilterRange title="Memory size" min={1} max={64} dimension="Gb" onChange={onChangeFilterRange} />
          </Grid>
          <Grid item xs={12} sm={8} md={9} xl={10}>
            {listRamElements}
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

export default GroupRams;
