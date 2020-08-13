import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import BuilderTitle from 'components/BuilderPage/BuilderTitle';
import GroupCpus from 'components/BuilderPage/GroupCpus';
import GroupGpus from 'components/BuilderPage/GroupGpus';
import GroupRams from 'components/BuilderPage/GroupRams';
import GroupMotherboards from 'components/BuilderPage/GroupMotherboards';
import GroupPowersupplies from 'components/BuilderPage/GroupPowersupply';
import { TypeFilter } from 'common/models/typeFilterBuilder';
import { TypeCpu } from 'common/models/typeCpu';
import { TypeGpu } from 'common/models/typeGpu';
import { TypeRam } from 'common/models/typeRam';
import { TypeMotherboard } from 'common/models/typeMotherboard';
import { TypePowersupplies } from 'common/models/typePowersupplies';
import { TypeSetup } from './reducer';
import {
  addCpuToSetupAction,
  addGpuToSetupAction,
  addMotherboardToSetupAction,
  addPowersupplyToSetupAction,
  addRamToSetupAction,
  removeCpuFromSetupAction,
  removeGpuFromSetupAction,
  removeMotherboardFromSetupAction,
  removePowersupplyFromSetupAction,
  removeRamFromSetupAction,
  resetSetupAction,
} from './actions';
import { MenuItems } from '../../common/enums/MenuItems';
import PageComponent from '../PageComponent';
import styles from './styles.module.scss';

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

  const setup = useSelector((state: { setup: TypeSetup }) => state.setup);
  const dispatch = useDispatch();

  const addFilterHandler = (newFilter: TypeFilter) => {
    setFilter(newFilter);
  };

  // const addCpuHandler = (cpu: TypeCpu) => {
  //   dispatch(addCpuToSetupAction(cpu.id));
  // };
  //
  // const addGpuHandler = (gpu: TypeGpu) => {
  //   dispatch(addGpuToSetupAction(gpu.id));
  // };
  //
  // const addRamHandler = (ram: TypeRam) => {
  //   dispatch(addRamToSetupAction(ram.id));
  // };
  //
  // const addMotherboardHandler = (motherboard: TypeMotherboard) => {
  //   dispatch(addMotherboardToSetupAction(motherboard.id));
  // };
  //
  // const addPowersuppliesHandler = (powersupplies: TypePowersupplies) => {
  //   dispatch(addPowersupplyToSetupAction(powersupplies.id));
  // };

  return (
    <PageComponent selectedMenuItemNumber={MenuItems.BuildSetup}>
    <Box className={className}>
      <BuilderTitle
        showResetSetup={Object.values(setup).some((e) => !!e)}
        onResetSetup={() => dispatch(resetSetupAction())}
        showResetFilter={Object.values(filter).some((e) => !!e)}
        onResetFilter={() => setFilter({})}
      />
      <Box>
        <GroupCpus
          filter={filter}
          selectedComponent={setup.cpu}
          onAddFilter={addFilterHandler}
          onAddComponent={(cpu) => dispatch(addCpuToSetupAction(cpu.id))}
          onRemoveSelectedComponent={() => dispatch(removeCpuFromSetupAction())}
        />
        <GroupGpus
          filter={filter}
          selectedComponent={setup.gpu}
          onAddFilter={addFilterHandler}
          onAddComponent={(gpu) => dispatch(addGpuToSetupAction(gpu.id))}
          onRemoveSelectedComponent={() => dispatch(removeGpuFromSetupAction())}
        />
        <GroupRams
          filter={filter}
          selectedComponent={setup.ram}
          onAddFilter={addFilterHandler}
          onAddComponent={(ram) => dispatch(addRamToSetupAction(ram.id))}
          onRemoveSelectedComponent={() => dispatch(removeRamFromSetupAction())}
        />
        <GroupMotherboards
          filter={filter}
          selectedComponent={setup.motherboard}
          onAddFilter={addFilterHandler}
          onAddComponent={(mb) => dispatch(addMotherboardToSetupAction(mb.id))}
          onRemoveSelectedComponent={() => dispatch(removeMotherboardFromSetupAction())}
        />
        <GroupPowersupplies
          filter={filter}
          selectedComponent={setup.powersupply}
          onAddFilter={addFilterHandler}
          onAddComponent={(ps) => dispatch(addPowersupplyToSetupAction(ps.id))}
          onRemoveSelectedComponent={() => dispatch(removePowersupplyFromSetupAction())}
        />
        </Box>
      </Box>
    </PageComponent>
  );
};

export default BuilderPage;
