import React, { ChangeEvent, useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Checkbox from 'components/BasicComponents/Checkbox';
import Spinner from 'components/Spinner';
import { TypeSocket } from 'common/models/typeSocket';
import { TypeFilterBuilder } from 'containers/BuilderPage/types';
import { getAllSocket } from 'api/services/socketService';
import styles from 'components/BuilderPage/styles.module.scss';

type PropsType = {
  filter: TypeFilterBuilder;
  onAddFilter: ({}: TypeFilterBuilder) => void;
};

const FilterSocket = ({ filter, onAddFilter }: PropsType): JSX.Element => {
  const [sockets, setSockets] = useState([] as TypeSocket[]);
  const [load, setLoad] = useState(false);

  const getSockets = async () => {
    setLoad(true);
    try {
      const res = await getAllSocket({});
      setSockets(res.data);
    } catch (err) {
      console.log(err); // add notification
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getSockets();
  }, []);

  const updateFilter = (socketIdSet: Set<number>) => {
    onAddFilter({
      ...filter,
      socketIdSet: new Set(socketIdSet),
    });
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const id = event.target.name;
    const socketIdSet = filter.socketIdSet;
    checked ? socketIdSet.add(+id) : socketIdSet.delete(+id);
    updateFilter(socketIdSet);
  };

  const resetSocketFilter = () => {
    const socketIdSet = filter.socketIdSet;
    socketIdSet.clear();
    updateFilter(socketIdSet);
  };

  const listSocketElements = sockets.map((socket) => (
    <FormControlLabel
      key={socket.id}
      control={
        <Checkbox name={socket.id.toString()} checked={filter.socketIdSet.has(socket.id)} onChange={onChangeHandler} />
      }
      label={socket.name}
    />
  ));

  return (
    <Accordion className={styles.group} TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary className={styles.summary} expandIcon={<ExpandMoreIcon />}>
        <Typography>Socket</Typography>
      </AccordionSummary>
      <AccordionDetails className={styles.details}>
        <FormGroup>
          {/*<FormControlLabel control={<Checkbox name="all" />} label="All sockets" />*/}
          {/*<Button className={styles.button} size="small">*/}
          {/*  Uncheck all*/}
          {/*</Button>*/}
          {/*<hr className={styles.hr} />*/}
          {listSocketElements}
          <Spinner load={load} />
          <Button className={styles.button} size="small" onClick={resetSocketFilter}>
            Uncheck all
          </Button>
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterSocket;
