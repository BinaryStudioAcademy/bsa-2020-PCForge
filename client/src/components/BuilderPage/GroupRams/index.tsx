import React, { useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import GroupItemSummary from '../GroupItemSummary';
import ListComponentsItem from '../ListComponentsItem';
import SpecificationField from '../SpecificationField';
import FilterRamTypes from '../FilterRamType';
import FilterRange from '../FilterRange';
import Paginator from '../Paginator';
import Spinner from '../Spinner';
import { getAllRam } from '../../../services/ramService';
import { TypeRam } from '../../../models/typeRam';
import { TypeFilter } from '../../../models/typeFilterBuilder';
import styles from '../styles.module.scss';

type PropsType = {
  filter: TypeFilter;
  onAddFilter: ({}: TypeFilter) => void;
  onAddComponent: ({}: TypeRam) => void;
};

const GroupRams = ({ filter, onAddFilter, onAddComponent }: PropsType): JSX.Element => {
  const countComponentsOnPage = 10;
  const [rams, setRams] = useState([] as TypeRam[]);
  const [count, setCount] = useState(0);
  const [pagination, setPagination] = useState({ from: 0, count: countComponentsOnPage });
  const [load, setLoad] = useState(false);

  const getRams = async () => {
    setLoad(true);
    const { ramTypeId } = filter;
    try {
      const res = await getAllRam({ typeId: ramTypeId, ...pagination });
      setRams(res.data);
      setCount(res.meta.countAfterFiltering);
      // setRams(newRams.length > 10 ? newRams.slice(0, 9) : newRams); // while the bug is on the server
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
    onAddFilter({ ramTypeId: ram.typeId });
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

  return (
    <Accordion className={styles.group} TransitionProps={{ unmountOnExit: true }}>
      <GroupItemSummary id="RAM" title="RAM" count={count} />
      <AccordionDetails className={styles.details}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} md={3} xl={2}>
            <FilterRamTypes filter={filter} onAddFilter={onAddFilter} />
            <FilterRange title="Memory size" min={1} max={64} dimension="Gb" onChange={() => {}} />
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
