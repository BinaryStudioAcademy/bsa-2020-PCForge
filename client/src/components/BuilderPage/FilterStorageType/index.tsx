import React, { ChangeEvent, useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import Checkbox from 'components/BasicComponents/Checkbox';
import { TypeFilterBuilder } from 'containers/BuilderPage/types';
import styles from 'components/BuilderPage/styles.module.scss';
import { GroupName } from '../../../containers/BuilderPage/config';

type PropsType = {
  show: boolean;
  onUpdateFilter: (type: string) => void;
};

const FilterStorageType = ({ show, onUpdateFilter }: PropsType): JSX.Element => {
  const [types, setTypes] = useState({ [GroupName.ssd]: false, [GroupName.hdd]: false });

  useEffect(() => {
    if (types[GroupName.ssd] && !types[GroupName.hdd]) onUpdateFilter(GroupName.ssd);
    else if (types[GroupName.hdd] && !types[GroupName.ssd]) onUpdateFilter(GroupName.hdd);
    else onUpdateFilter('');
  }, [types]);

  return (
    <Accordion className={styles.group} TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary className={styles.filterSummary} expandIcon={<ExpandMoreIcon />}>
        <Typography>Type Storage</Typography>
      </AccordionSummary>
      <AccordionDetails className={styles.filterDetails}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                disabled={!show}
                name="HDD"
                checked={types[GroupName.ssd]}
                onChange={(e, checked) => setTypes({ ...types, [GroupName.ssd]: checked })}
              />
            }
            label="SSD"
          />
          <FormControlLabel
            control={
              <Checkbox
                disabled={!show}
                name="SSD"
                checked={types[GroupName.hdd]}
                onChange={(e, checked) => setTypes({ ...types, [GroupName.hdd]: checked })}
              />
            }
            label="HDD"
          />
          <Button
            disabled={!show}
            className={styles.button}
            size="small"
            onClick={() =>
              setTypes({
                [GroupName.ssd]: false,
                [GroupName.hdd]: false,
              })
            }
          >
            Uncheck all
          </Button>
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterStorageType;
