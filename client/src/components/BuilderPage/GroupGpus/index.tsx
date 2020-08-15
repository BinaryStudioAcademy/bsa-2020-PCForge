import React, { useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SpecificationField from 'components/BuilderPage/SpecificationField';
import ListComponentsItem from 'components/BuilderPage/ListComponentsItem';
import GroupItemSummary from 'components/BuilderPage/GroupItemSummary';
import Paginator from 'components/Paginator';
import FilterRange from 'components/BuilderPage/FilterRange';
import Spinner from 'components/Spinner';
import { getAllGpu } from 'api/services/gpuService';
import { TypeGpu } from 'common/models/typeGpu';
import { ComponentGroups, TypeFilterBuilder } from 'containers/BuilderPage/types';
import styles from 'components/BuilderPage/styles.module.scss';

type PropsType = {
  filter: TypeFilterBuilder;
  selectedComponent: TypeGpu | null;
  onAddFilter: ({}: TypeFilterBuilder) => void;
  onAddComponent: ({}: TypeGpu) => void;
  onRemoveSelectedComponent: () => void;
  expanded: boolean;
  onChangeExpanded: (expanded: ComponentGroups | false) => void;
};

const GroupGpus = ({
  filter,
  selectedComponent,
  onAddFilter,
  onAddComponent,
  onRemoveSelectedComponent,
  expanded,
  onChangeExpanded,
}: PropsType): JSX.Element => {
  const countComponentsOnPage = 10;
  const [gpus, setGpus] = useState([] as TypeGpu[]);
  const [count, setCount] = useState(0);
  const [pagination, setPagination] = useState({ from: 0, count: countComponentsOnPage });
  const [load, setLoad] = useState(false);

  const getGpus = async () => {
    setLoad(true);
    try {
      const res = await getAllGpu({ ...pagination });
      setGpus(res.data);
      setCount(res.meta.countAfterFiltering);
    } catch (err) {
      console.log(err); // add notification
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getGpus();
  }, [filter, pagination]);

  const AddComponentHandler = (gpu: TypeGpu): void => {
    onAddComponent(gpu);
  };

  const specifications = (gpu: TypeGpu): JSX.Element => (
    <Box>
      <SpecificationField title="Bus interface" value={gpu.interface} />
      <SpecificationField title="Memory size" value={gpu.memorySize} />
      <SpecificationField title="OpenGL" value={gpu.opengl} />
      <SpecificationField title="TDP" value={gpu.tdp} />
    </Box>
  );

  const listGpuElements = gpus?.map((gpu) => (
    <ListComponentsItem
      key={gpu.id}
      title={gpu.name}
      specifications={specifications(gpu)}
      onAddComponent={() => AddComponentHandler(gpu)}
    />
  ));

  function onChangeFilterRange() {
    // do nothing.
  }

  return (
    <Accordion
      className={styles.group}
      expanded={expanded}
      onChange={(ev, expanded) => onChangeExpanded(expanded ? ComponentGroups.gpu : false)}
      TransitionProps={{ unmountOnExit: true }}
    >
      <GroupItemSummary
        id="GPU"
        title="GPU"
        count={count}
        nameComponent={selectedComponent ? selectedComponent.name : ''}
        onClear={onRemoveSelectedComponent}
      />
      <AccordionDetails className={styles.details}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} md={3} xl={2}>
            <FilterRange title="Memory size" min={32} max={2048} dimension="Mb" onChange={onChangeFilterRange} />
          </Grid>
          <Grid item xs={12} sm={8} md={9} xl={10}>
            {listGpuElements}
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

export default GroupGpus;
