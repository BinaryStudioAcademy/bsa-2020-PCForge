import React, { ChangeEvent, useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import Spinner from 'components/Spinner';
import Checkbox from 'components/BasicComponents/Checkbox';
import { TypeRamType } from 'common/models/typeRamType';
import { TypeFilterBuilder } from 'containers/BuilderPage/types';
import { getAllRamType } from 'api/services/ramTypeService';
import styles from 'components/BuilderPage/styles.module.scss';

type PropsType = {
  filter: TypeFilterBuilder;
  show: boolean;
  onUpdateFilter: ({}: TypeFilterBuilder) => void;
};

const FilterRamTypes = ({ filter, show, onUpdateFilter }: PropsType): JSX.Element => {
  const [ramTypes, setRamTypes] = useState([] as TypeRamType[]);
  const [load, setLoad] = useState(false);

  const getRamTypes = async () => {
    setLoad(true);
    try {
      const res = await getAllRamType({});
      setRamTypes(res.data);
    } catch (err) {
      console.log(err); // add notification
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getRamTypes();
  }, []);

  const updateRamTypeFilter = (ramTypeIdSet: Set<number>) => {
    onUpdateFilter({
      ...filter,
      socketIdSet: new Set(ramTypeIdSet),
    });
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const id = event.target.name;
    const ramTypeIdSet = filter.ramTypeIdSet;
    checked ? ramTypeIdSet.add(+id) : ramTypeIdSet.delete(+id);
    updateRamTypeFilter(ramTypeIdSet);
  };

  const resetRamTypeFilter = () => {
    const ramTypeIdSet = filter.ramTypeIdSet;
    ramTypeIdSet.clear();
    updateRamTypeFilter(ramTypeIdSet);
  };

  const listRamTypeElements = ramTypes.map((ramType) => (
    <FormControlLabel
      key={ramType.id}
      control={
        <Checkbox
          disabled={!show}
          name={ramType.id.toString()}
          checked={filter.ramTypeIdSet.has(ramType.id)}
          onChange={onChangeHandler}
        />
      }
      label={ramType.name}
    />
  ));

  return (
    <Accordion className={styles.group} TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary className={styles.summary} expandIcon={<ExpandMoreIcon />}>
        <Typography>Ram Type</Typography>
      </AccordionSummary>
      <AccordionDetails className={styles.details}>
        <FormGroup>
          {listRamTypeElements}
          <Spinner load={load} />
          <Button disabled={!show} className={styles.button} size="small" onClick={resetRamTypeFilter}>
            Uncheck all
          </Button>
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterRamTypes;
