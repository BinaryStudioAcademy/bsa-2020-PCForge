import React, { ChangeEvent} from 'react';
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
import { TypeFilterBuilder } from 'containers/BuilderPage/types';
import styles from 'components/BuilderPage/styles.module.scss';

type PropsType = {
  filter: TypeFilterBuilder;
  show: boolean;
  onUpdateFilter: (filter: TypeFilterBuilder) => void;
};

const FilterHddTypes = ({ filter, show, onUpdateFilter }: PropsType): JSX.Element => {
  const sataType = [1, 2, 3];

  const updateRamTypeFilter = (sata: Set<number>, m2: Set<string>) => {
    onUpdateFilter({
      ...filter,
      sata: new Set(sata),
      m2: new Set(m2),
    });
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const value = event.target.name;
    const sata = filter.sata;
    const m2 = filter.m2;
    if (value === 'm2') {
      checked ? m2.add(value) : m2.delete(value);
    } else {
      checked ? sata.add(+value) : sata.delete(+value);
    }
    updateRamTypeFilter(sata, m2);
  };

  const resetRamTypeFilter = () => {
    const sata = filter.sata;
    const m2 = filter.m2;
    sata.clear();
    m2.clear();
    updateRamTypeFilter(sata, m2);
  };

  const listHddTypeElements = sataType.map((sata) => (
    <FormControlLabel
      key={sata}
      control={
        <Checkbox disabled={!show} name={sata.toString()} checked={filter.sata.has(sata)} onChange={onChangeHandler} />
      }
      label={`SATA ${sata.toString()}`}
    />
  ));

  return (
    <Accordion className={styles.group} TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary className={styles.summary} expandIcon={<ExpandMoreIcon />}>
        <Typography>Interface Disc</Typography>
      </AccordionSummary>
      <AccordionDetails className={styles.details}>
        <FormGroup>
          {listHddTypeElements}
          <FormControlLabel
            control={<Checkbox disabled={!show} name="m2" checked={filter.m2.has('m2')} onChange={onChangeHandler} />}
            label="M2"
          />
          <Button disabled={!show} className={styles.button} size="small" onClick={resetRamTypeFilter}>
            Uncheck all
          </Button>
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterHddTypes;
