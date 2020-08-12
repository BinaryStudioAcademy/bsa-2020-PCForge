import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import BuilderTitle from 'components/BuilderPage/BuilderTitle';
import GroupCpus from 'components/BuilderPage/GroupCpus';
import GroupGpus from 'components/BuilderPage/GroupGpus';
import GroupRams from 'components/BuilderPage/GroupRams';
import GroupMotherboards from 'components/BuilderPage/GroupMotherboards';
import GroupPowersupplies from 'components/BuilderPage/GroupPowersupply';
import { TypeFilter } from 'models/typeFilterBuilder';
import { TypeCpu } from 'models/typeCpu';
import { TypeGpu } from 'models/typeGpu';
import { TypeRam } from 'models/typeRam';
import { TypeMotherboard } from 'models/typeMotherboard';
import { TypePowersupplies } from 'models/typePowersupplies';
// import styles from './styles.module.scss';

type PropsType = {
  className?: string;
};

type TypeBuild = {
  cpu: TypeCpu;
  gpu: TypeGpu;
  ram: TypeRam;
  motherboard: TypeMotherboard;
  powersupplies: TypePowersupplies;
};

const BuilderPage = ({ className = '' }: PropsType): JSX.Element => {
  const [filter, setFilter] = useState({} as TypeFilter);
  const [build, setBuild] = useState({} as TypeBuild);

  const addFilterHandler = (newFilter: TypeFilter) => {
    setFilter({
      ...filter,
      ...newFilter,
    });
  };

  const addCpuHandler = (cpu: TypeCpu) => {
    setBuild({ ...build, cpu });
  };

  const addGpuHandler = (gpu: TypeGpu) => {
    setBuild({ ...build, gpu });
  };

  const addRamHandler = (ram: TypeRam) => {
    setBuild({ ...build, ram });
  };

  const addMotherboardHandler = (motherboard: TypeMotherboard) => {
    setBuild({ ...build, motherboard });
  };

  const addPowersuppliesHandler = (powersupplies: TypePowersupplies) => {
    setBuild({ ...build, powersupplies });
  };

  return (
    <Box className={className}>
      <BuilderTitle />
      <Box>
        <GroupCpus filter={filter} onAddFilter={addFilterHandler} onAddComponent={addCpuHandler} />
        <GroupGpus filter={filter} onAddFilter={addFilterHandler} onAddComponent={addGpuHandler} />
        <GroupRams filter={filter} onAddFilter={addFilterHandler} onAddComponent={addRamHandler} />
        <GroupMotherboards filter={filter} onAddFilter={addFilterHandler} onAddComponent={addMotherboardHandler} />
        <GroupPowersupplies filter={filter} onAddFilter={addFilterHandler} onAddComponent={addPowersuppliesHandler} />
      </Box>
    </Box>
  );
};

export default BuilderPage;
