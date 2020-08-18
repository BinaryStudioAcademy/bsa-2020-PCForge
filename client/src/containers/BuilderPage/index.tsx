import React, { useEffect, useState } from 'react';
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
  addComponentToSetupAction,
  initSetupAction,
  removeComponentFromSetupAction,
  resetSetupAction,
} from './actions';
import { MenuItems } from '../../common/enums/MenuItems';
import PageComponent from '../PageComponent';
import styles from './styles.module.scss';
import { Group } from './config';
import GroupComponent from '../../components/BuilderPage/GroupComponent';

type PropsType = {
  className?: string;
};

const BuilderPage = ({ className = '' }: PropsType): JSX.Element => {
  const [expanded, setExpanded] = useState<false | ComponentGroups | Group>(false); // todo: del ComponentGroups
  const [filter, setFilter] = useState<TypeFilterBuilder>({
    socketIdSet: new Set() as Set<number>,
    ramTypeIdSet: new Set() as Set<number>,
  });

  const setup = useSelector((state: { setup: TypeSetup }) => state.setup);
  const dispatch = useDispatch();

  const resetFilter = () => {
    setFilter({ socketIdSet: new Set(), ramTypeIdSet: new Set() });
  };

  const filterForCpu = {
    ...filter,
    socketIdSet: setup.motherboard ? new Set([setup.motherboard.socketId]) : filter.socketIdSet,
  };

  const filterForRam = {
    ...filter,
    ramTypeIdSet: setup.motherboard ? new Set([setup.motherboard.ramTypeId]) : filter.ramTypeIdSet,
  };

  const filterForMotherboard = {
    ...filter,
    socketIdSet: setup.cpu ? new Set([setup.cpu.socketId]) : filter.socketIdSet,
    ramTypeIdSet: setup.ram ? new Set([setup.ram.typeId]) : filter.ramTypeIdSet,
  };

  useEffect(() => {
    dispatch(initSetupAction());
  }, []);

  const testGroup = {
    group: Group.cpu,
    filters: [
      {
        type:
      }
    ]
  };

  return (
    <PageComponent selectedMenuItemNumber={MenuItems.BuildSetup}>
      <Box className={styles.builderWrapper}>
        <BuilderTitle
          showResetSetup={Object.values(setup).some((e) => !!e)}
          onResetSetup={() => dispatch(resetSetupAction())}
          showResetFilter={Object.values(filter).some((e) => !!e.size)}
          onResetFilter={resetFilter}
        />
        <Box>
          <GroupComponent
            cfg={testGroup}
            setup={setup}
            filter={filterForCpu}
            showFilters={{ socket: !setup.motherboard, ramType: !setup.motherboard }}
            // selectedComponent={setup.cpu}
            onUpdateFilter={(filter) => setFilter(filter)}
            onAddComponent={(group, id) => dispatch(addComponentToSetupAction({ group, id }))}
            onRemoveSelectedComponent={(group) => dispatch(removeComponentFromSetupAction({ group }))}
            expanded={expanded}
            onChangeExpanded={setExpanded}
          />
          <GroupCpus
            filter={filterForCpu}
            showFilters={{ socket: !setup.motherboard, ramType: !setup.motherboard }}
            selectedComponent={setup.cpu}
            onUpdateFilter={(filter) => setFilter(filter)}
            onAddComponent={(cpu) => dispatch(addComponentToSetupAction({ group: Group.cpu, id: cpu.id }))}
            onRemoveSelectedComponent={() => dispatch(removeComponentFromSetupAction({ group: Group.cpu }))}
            expanded={expanded === ComponentGroups.cpu}
            onChangeExpanded={setExpanded}
          />
          <GroupGpus
            filter={filter}
            selectedComponent={setup.gpu}
            onUpdateFilter={(filter) => setFilter(filter)}
            onAddComponent={(gpu) => dispatch(addComponentToSetupAction({ group: Group.gpu, id: gpu.id }))}
            onRemoveSelectedComponent={() => dispatch(removeComponentFromSetupAction({ group: Group.gpu }))}
            expanded={expanded === ComponentGroups.gpu}
            onChangeExpanded={setExpanded}
          />
          <GroupRams
            filter={filterForRam}
            showFilters={{ socket: !setup.motherboard, ramType: !setup.motherboard }}
            selectedComponent={setup.ram}
            onUpdateFilter={(filter) => setFilter(filter)}
            onAddComponent={(ram) => dispatch(addComponentToSetupAction({ group: Group.ram, id: ram.id }))}
            onRemoveSelectedComponent={() => dispatch(removeComponentFromSetupAction({ group: Group.ram }))}
            expanded={expanded === ComponentGroups.ram}
            onChangeExpanded={setExpanded}
          />
          <GroupMotherboards
            filter={filterForMotherboard}
            showFilters={{ socket: !setup.cpu, ramType: !setup.ram }}
            selectedComponent={setup.motherboard}
            onUpdateFilter={(filter) => setFilter(filter)}
            onAddComponent={(mb) => dispatch(addComponentToSetupAction({ group: Group.motherboard, id: mb.id }))}
            onRemoveSelectedComponent={() => dispatch(removeComponentFromSetupAction({ group: Group.motherboard }))}
            expanded={expanded === ComponentGroups.motherboard}
            onChangeExpanded={setExpanded}
          />
          <GroupPowersupplies
            filter={filter}
            selectedComponent={setup.powersupply}
            onUpdateFilter={(filter) => setFilter(filter)}
            onAddComponent={(ps) => dispatch(addComponentToSetupAction({ group: Group.powersupply, id: ps.id }))}
            onRemoveSelectedComponent={() => dispatch(removeComponentFromSetupAction({ group: Group.powersupply }))}
            expanded={expanded === ComponentGroups.powersupply}
            onChangeExpanded={setExpanded}
          />
        </Box>
      </Box>
    </PageComponent>
  );
};

export default BuilderPage;
