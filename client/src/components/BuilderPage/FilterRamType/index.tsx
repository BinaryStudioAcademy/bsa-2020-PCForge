import React, { useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Spinner from '../Spinner';
import { getAllRamType } from '../../../services/ramTypeService';
import { TypeRamType } from '../../../models/typeRamType';
import { TypeFilter } from '../../../models/typeFilterBuilder';
import styles from '../styles.module.scss';

type PropsType = {
  filter: TypeFilter;
  onAddFilter: ({}: TypeFilter) => void;
};

const FilterRamTypes = ({ filter, onAddFilter }: PropsType): JSX.Element => {
  const [ramTypes, setRamTypes] = useState([] as TypeRamType[]);
  const [value, setValue] = useState('');
  const [load, setLoad] = useState(false);

  const getRamTypes = async () => {
    setLoad(true);
    try {
      const newRamTypes = await getAllRamType();
      setRamTypes(newRamTypes);
    } catch (err) {
      console.log(err); // add notification
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getRamTypes();
  }, []);

  useEffect(() => {
    setValue(ramTypes.find((ram) => ram.id === filter.ramTypeId)?.name as string);
  }, [filter]);

  const onChangeHandler = (ev: { target: { value: string } }) => {
    const name = ev.target.value;
    const id = ramTypes.find((ram) => ram.name === name)?.id as number;
    onAddFilter({
      ramTypeId: id,
    });
  };

  const listRamTypeElements = ramTypes.map((ramType) => (
    <FormControlLabel key={ramType.id} value={ramType.name} control={<Radio />} label={ramType.name} />
  ));

  return (
    <Accordion className={styles.group} TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary className={styles.summary} expandIcon={<ExpandMoreIcon />}>
        <Typography>Ram Type</Typography>
      </AccordionSummary>
      <AccordionDetails className={styles.details}>
        <FormControl component="fieldset">
          <RadioGroup aria-label="ramType" name="ramType" value={value} onChange={onChangeHandler}>
            {listRamTypeElements}
            <Spinner load={load} />
          </RadioGroup>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterRamTypes;
