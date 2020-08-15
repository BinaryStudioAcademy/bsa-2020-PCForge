import React, { useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import GroupItemSummary from 'components/BuilderPage/GroupItemSummary';
import ListComponentsItem from 'components/BuilderPage/ListComponentsItem';
import SpecificationField from 'components/BuilderPage/SpecificationField';
import FilterRamTypes from 'components/BuilderPage/FilterRamType';
import FilterRange from 'components/BuilderPage/FilterRange';
import Paginator from 'components/Paginator';
import Spinner from 'components/Spinner';
import { getAllRam } from 'api/services/ramService';
import { TypeRam } from 'common/models/typeRam';
import { TypeFilterBuilder } from '../../../containers/BuilderPage/types';
import styles from 'components/BuilderPage/styles.module.scss';

type PropsType = {
  filter: TypeFilterBuilder;
  selectedComponent: TypeRam | null;
  onAddFilter: ({}: TypeFilterBuilder) => void;
  onAddComponent: ({}: TypeRam) => void;
  onRemoveSelectedComponent: () => void;
  expanded: boolean;
  onChangeExpanded: (expanded: string | false) => void;
};

const GroupRams = ({
  filter,
  selectedComponent,
  onAddFilter,
  onAddComponent,
  onRemoveSelectedComponent,
  expanded,
  onChangeExpanded,
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

  const AddComponentHandler = (ram: TypeRam): void => {
    onAddFilter({
      ...filter,
      ramTypeIdSet: new Set(filter.ramTypeIdSet.add(ram.typeId)),
    });
    onAddComponent(ram);
  };

  const specifications = (ram: TypeRam): JSX.Element => (
    <Box>
      <SpecificationField title="Memory size" value={`${ram.memorySize}Gb`} />
      <SpecificationField title="Ram Frequency" value={`${ram.frequency}MHz`} />
      <SpecificationField title="Ram type" value={ram.ramType.name} />
    </Box>
  );

  const listRamElements = rams?.map((ram) => (
    <ListComponentsItem
      key={ram.id}
      title={ram.name}
      specifications={specifications(ram)}
      onAddComponent={() => AddComponentHandler(ram)}
    />
  ));

  function onChangeFilterRange() {
    // do nothing.
  }

  return (
    <Accordion
      className={styles.group}
      expanded={expanded}
      onChange={(ev, expanded) => onChangeExpanded(expanded ? 'ram' : false)}
      TransitionProps={{ unmountOnExit: true }}
    >
      <GroupItemSummary
        id="RAM"
        title="RAM"
        count={count}
        nameComponent={selectedComponent ? selectedComponent.name : ''}
        onClear={onRemoveSelectedComponent}
      />
      <AccordionDetails className={styles.details}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} md={3} xl={2}>
            <FilterRamTypes filter={filter} onAddFilter={onAddFilter} />
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
