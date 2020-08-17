import React, { useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import GroupItemSummary from 'components/BuilderPage/GroupItemSummary';
import ListComponentsItem from 'components/BuilderPage/ListComponentsItem';
import FilterRange from 'components/BuilderPage/FilterRange';
import Paginator from 'components/Paginator';
import Spinner from 'components/Spinner';
import { SpecificationPowersupply } from 'components/BuilderPage/Specifications';
import { getAllPowersupplies } from 'api/services/powersupplyService';
import { TypePowersupplies } from 'common/models/typePowersupplies';
import { ComponentGroups, TypeFilterBuilder } from 'containers/BuilderPage/types';
import styles from 'components/BuilderPage/styles.module.scss';
import Search from 'components/Search';

type PropsType = {
  filter: TypeFilterBuilder;
  selectedComponent: TypePowersupplies | null;
  onUpdateFilter: ({}: TypeFilterBuilder) => void;
  onAddComponent: ({}: TypePowersupplies) => void;
  onRemoveSelectedComponent: () => void;
  expanded: boolean;
  onChangeExpanded: (expanded: ComponentGroups | false) => void;
};

type TypePower = {
  minValue: number;
  maxValue: number;
};

const GroupPowersupplies = ({
  filter,
  selectedComponent,
  onUpdateFilter,
  onAddComponent,
  onRemoveSelectedComponent,
  expanded,
  onChangeExpanded,
}: PropsType): JSX.Element => {
  const countComponentsOnPage = 10;
  const minPower = 100;
  const maxPower = 2000;
  const [powersupplies, setPowersupplies] = useState([] as TypePowersupplies[]);
  const [count, setCount] = useState(0);
  const [pagination, setPagination] = useState({ from: 0, count: countComponentsOnPage });
  const [power, setPower] = useState({} as TypePower);
  const [name, setName] = useState('');
  const [load, setLoad] = useState(false);

  const getPowersupplies = async () => {
    setLoad(true);
    try {
      const queryClockspeed = {
        'power[minValue]': power.minValue,
        'power[maxValue]': power.maxValue,
      };
      const res = await getAllPowersupplies({ ...pagination, ...queryClockspeed, name });
      setPowersupplies(res.data);
      setCount(res.meta.countAfterFiltering);
    } catch (err) {
      console.log(err); // add notification
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getPowersupplies();
  }, [filter, pagination, power, name]);

  const listPowersupplyElements = powersupplies?.map((powersupply) => (
    <ListComponentsItem
      key={powersupply.id}
      title={powersupply.name}
      specifications={<SpecificationPowersupply powersupply={powersupply} />}
      onAddComponent={() => onAddComponent(powersupply)}
    />
  ));

  function onChangeFilterRange([minValue, maxValue]: number[]): void {
    setPower({
      ...power,
      minValue,
      maxValue,
    });
  }

  return (
    <Accordion
      className={styles.group}
      expanded={expanded}
      onChange={(ev, expanded) => onChangeExpanded(expanded ? ComponentGroups.powersupply : false)}
      TransitionProps={{ unmountOnExit: true }}
    >
      <GroupItemSummary
        id="Power supply"
        title="Power supply"
        count={count}
        nameComponent={selectedComponent ? selectedComponent.name : ''}
        popupContent={selectedComponent ? <SpecificationPowersupply powersupply={selectedComponent} /> : false}
        onClear={onRemoveSelectedComponent}
      />
      <AccordionDetails className={styles.details}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} md={3} xl={2}>
            <Search value={name} onChange={(e) => setName(e.target.value)} />
            <FilterRange
              title="Power"
              min={minPower}
              max={maxPower}
              step={100}
              dimension="W"
              onChange={onChangeFilterRange}
            />
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
