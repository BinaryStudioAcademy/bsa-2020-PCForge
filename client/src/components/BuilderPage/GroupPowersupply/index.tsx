import React, { useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import GroupItemSummary from 'components/BuilderPage/GroupItemSummary';
import ListComponentsItem from 'components/BuilderPage/ListComponentsItem';
import SpecificationField from 'components/BuilderPage/SpecificationField';
import FilterRange from 'components/BuilderPage/FilterRange';
import Paginator from 'components/Paginator';
import Spinner from 'components/Spinner';
import { getAllPowersupplies } from 'services/powersupplyService';
import { TypePowersupplies } from 'models/typePowersupplies';
import { TypeFilter } from 'models/typeFilterBuilder';
import styles from 'components/BuilderPage/styles.module.scss';

type PropsType = {
  filter: TypeFilter;
  onAddFilter: ({}: TypeFilter) => void;
  onAddComponent: ({}: TypePowersupplies) => void;
};

const GroupPowersupplies = ({ filter, onAddFilter, onAddComponent }: PropsType): JSX.Element => {
  const countComponentsOnPage = 10;
  const [powersupplies, setPowersupplies] = useState([] as TypePowersupplies[]);
  const [count, setCount] = useState(0);
  const [pagination, setPagination] = useState({ from: 0, count: countComponentsOnPage });
  const [load, setLoad] = useState(false);

  const getPowersupplies = async () => {
    setLoad(true);
    try {
      const res = await getAllPowersupplies({ ...pagination });
      setPowersupplies(res.data);
      setCount(res.meta.countAfterFiltering);
      // setPowersupplies(newPowersupplies.length > 10 ? newPowersupplies.slice(0, 9) : newPowersupplies); // while the bug is on the server
    } catch (err) {
      console.log(err); // add notification
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getPowersupplies();
  }, [filter, pagination]);

  const AddComponentHandler = (powersupply: TypePowersupplies): void => {
    onAddComponent(powersupply);
  };

  const specifications = (powersupply: TypePowersupplies): JSX.Element => (
    <Box>
      <SpecificationField title="Power" value={`${powersupply.power}W`} />
    </Box>
  );

  const listPowersupplyElements = powersupplies?.map((powersupply) => (
    <ListComponentsItem
      key={powersupply.id}
      title={powersupply.name}
      specifications={specifications(powersupply)}
      onAddComponent={() => AddComponentHandler(powersupply)}
    />
  ));

  return (
    <Accordion className={styles.group} TransitionProps={{ unmountOnExit: true }}>
      <GroupItemSummary id="Power supply" title="Power supply" count={count} />
      <AccordionDetails className={styles.details}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} md={3} xl={2}>
            <FilterRange title="Power" min={200} max={800} dimension="W" onChange={() => {}} />
          </Grid>
          <Grid item xs={12} sm={8} md={9} xl={10}>
            {listPowersupplyElements}
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

export default GroupPowersupplies;