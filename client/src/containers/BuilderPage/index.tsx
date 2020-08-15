import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import BuilderTitle from 'components/BuilderPage/BuilderTitle';
import GroupCpus from 'components/BuilderPage/GroupCpus';
import GroupGpus from 'components/BuilderPage/GroupGpus';
import GroupRams from 'components/BuilderPage/GroupRams';
import GroupMotherboards from 'components/BuilderPage/GroupMotherboards';
import GroupPowersupplies from 'components/BuilderPage/GroupPowersupply';
import { ComponentGroups, TypeFilterBuilder } from './types';
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

const BuilderPage = ({ className = '' }: PropsType): JSX.Element => {
  const [expanded, setExpanded] = useState<false | ComponentGroups>(false);
  const [filter, setFilter] = useState<TypeFilterBuilder>({
    socketIdSet: new Set() as Set<number>,
    ramTypeIdSet: new Set() as Set<number>,
  });

  const setup = useSelector((state: { setup: TypeSetup }) => state.setup);
  const dispatch = useDispatch();

  const resetFilter = () => {
    setFilter({ socketIdSet: new Set(), ramTypeIdSet: new Set() });
  };

  return (
    <PageComponent selectedMenuItemNumber={MenuItems.BuildSetup}>
      <Box className={styles.builderWrapper}>
        <BuilderTitle
          showResetSetup={Object.values(setup).some((e) => !!e)}
          onResetSetup={() => dispatch(resetSetupAction())}
          showResetFilter={Object.values(filter).some((e) => !!e)}
          onResetFilter={resetFilter}
        />
        <Box>
          <GroupCpus
            filter={filter}
            selectedComponent={setup.cpu}
            onAddFilter={(filter) => setFilter(filter)}
            onAddComponent={(cpu) => dispatch(addCpuToSetupAction(cpu.id))}
            onRemoveSelectedComponent={() => dispatch(removeCpuFromSetupAction())}
            expanded={expanded === ComponentGroups.cpu}
            onChangeExpanded={setExpanded}
          />
          <GroupGpus
            filter={filter}
            selectedComponent={setup.gpu}
            onAddFilter={(filter) => setFilter(filter)}
            onAddComponent={(gpu) => dispatch(addGpuToSetupAction(gpu.id))}
            onRemoveSelectedComponent={() => dispatch(removeGpuFromSetupAction())}
            expanded={expanded === ComponentGroups.gpu}
            onChangeExpanded={setExpanded}
          />
          <GroupRams
            filter={filter}
            selectedComponent={setup.ram}
            onAddFilter={(filter) => setFilter(filter)}
            onAddComponent={(ram) => dispatch(addRamToSetupAction(ram.id))}
            onRemoveSelectedComponent={() => dispatch(removeRamFromSetupAction())}
            expanded={expanded === ComponentGroups.ram}
            onChangeExpanded={setExpanded}
          />
          <GroupMotherboards
            filter={filter}
            selectedComponent={setup.motherboard}
            onAddFilter={(filter) => setFilter(filter)}
            onAddComponent={(mb) => dispatch(addMotherboardToSetupAction(mb.id))}
            onRemoveSelectedComponent={() => dispatch(removeMotherboardFromSetupAction())}
            expanded={expanded === ComponentGroups.motherboard}
            onChangeExpanded={setExpanded}
          />
          <GroupPowersupplies
            filter={filter}
            selectedComponent={setup.powersupply}
            onAddFilter={(filter) => setFilter(filter)}
            onAddComponent={(ps) => dispatch(addPowersupplyToSetupAction(ps.id))}
            onRemoveSelectedComponent={() => dispatch(removePowersupplyFromSetupAction())}
            expanded={expanded === ComponentGroups.powersupply}
            onChangeExpanded={setExpanded}
          />
        </Box>
      </Box>
    </PageComponent>
  );
};

export default BuilderPage;
