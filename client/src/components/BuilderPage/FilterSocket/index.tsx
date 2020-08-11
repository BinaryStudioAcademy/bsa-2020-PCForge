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
import { getAllSocket } from '../../../services/socketService';
import { TypeSocket } from '../../../models/typeSocket';
import { TypeFilterBuilder } from '../../../models/typeFilterBuilder';
import styles from "../styles.module.scss";

type PropsType = {
  filter: TypeFilterBuilder;
  onAddFilter: ({}: TypeFilterBuilder) => void;
};

const FilterSocket = ({ filter, onAddFilter }: PropsType): JSX.Element => {
  const [sockets, setSockets] = useState([] as TypeSocket[]);
  const [value, setValue] = useState('');
  const [load, setLoad] = useState(false);

  const getSockets = async () => {
    setLoad(true);
    try {
      const newSockets = await getAllSocket();
      setSockets(newSockets);
    } catch (err) {
      console.log(err); // add notification
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getSockets();
  }, []);

  useEffect(() => {
    setValue(sockets.find((s) => s.id === filter.socketId)?.name as string);
  }, [filter]);

  const onChangeHandler = (ev: { target: { value: string } }) => {
    const name = ev.target.value;
    const id = sockets.find((s) => s.name === name)?.id as number;
    onAddFilter({
      socketId: id,
    });
  };

  const listSocketElements = sockets.map((socket) => (
    <FormControlLabel key={socket.id} value={socket.name} control={<Radio />} label={socket.name} />
  ));

  return (
    <Accordion className={styles.group} TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary className={styles.summary} expandIcon={<ExpandMoreIcon />}>
        <Typography>Socket</Typography>
      </AccordionSummary>
      <AccordionDetails className={styles.details}>
        <FormControl component="fieldset">
          <RadioGroup aria-label="socket" name="socket" value={value} onChange={onChangeHandler}>
            {listSocketElements}
            <Spinner load={load} />
          </RadioGroup>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterSocket;
