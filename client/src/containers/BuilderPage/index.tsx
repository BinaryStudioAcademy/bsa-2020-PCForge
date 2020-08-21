import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import BuilderTitle from 'components/BuilderPage/BuilderTitle';
import GroupCpus from 'components/BuilderPage/GroupCpus';
import GroupGpus from 'components/BuilderPage/GroupGpus';
import GroupRams from 'components/BuilderPage/GroupRams';
import GroupMotherboards from 'components/BuilderPage/GroupMotherboards';
import GroupPowersupplies from 'components/BuilderPage/GroupPowersupply';
import { ComponentGroups, TypeFilterBuilder } from 'containers/BuilderPage/types';
import { TypeSetup } from 'containers/BuilderPage/reducer';
import {
  addComponentToSetupAction,
  initSetupAction,
  removeComponentFromSetupAction,
  resetSetupAction,
} from 'containers/BuilderPage/actions';
import { MenuItems } from 'common/enums/MenuItems';
import PageComponent from 'containers/PageComponent';
import BuilderSummary from 'components/BuilderPage/BuilderSummary';

import styles from 'containers/BuilderPage/styles.module.scss';
import { Group } from 'containers/BuilderPage/config';

import Modal from 'components/BasicComponents/Modal';
import SaveSetupModal from 'components/BuilderPage/SaveSetupModal';
import { AssignmentReturn } from '@material-ui/icons';
import QuickMatcher from 'containers/QuickMatcher';

type PropsType = {
  className?: string;
};

const BuilderPage = ({ className = '' }: PropsType): JSX.Element => {
  const [expanded, setExpanded] = useState<false | ComponentGroups>(false);
  const [filter, setFilter] = useState<TypeFilterBuilder>({
    socketIdSet: new Set() as Set<number>,
    ramTypeIdSet: new Set() as Set<number>,
  });
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const showModal = () => {
    setIsModalActive(true);
  };
  const hideModal = () => {
    setIsModalActive(false);
  };

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

  const isCanToSaveSetup = (setup: TypeSetup) => {
    return Boolean(setup.cpu && setup.gpu && setup.motherboard && setup.ram && setup.powersupply);
  };

  useEffect(() => {
    dispatch(initSetupAction());
  }, []);

  return (
    <PageComponent selectedMenuItemNumber={MenuItems.BuildSetup}>
      <Box className={styles.builderWrapper}>
        {isModalActive ? <SaveSetupModal onClose={hideModal} /> : null}
        <BuilderTitle
          isCanToSave={isCanToSaveSetup(setup)}
          showResetSetup={Object.values(setup).some((e) => !!e)}
          onResetSetup={() => dispatch(resetSetupAction())}
          showResetFilter={Object.values(filter).some((e) => !!e.size)}
          onResetFilter={resetFilter}
          onSaveSetup={showModal}
        />
        <Box className={styles.contentWrapper}>
          <Box className={styles.componentsWrapper}>
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
          <Box className={styles.summaryWrapper}>
            <BuilderSummary setup={setup} />
            {console.log(setup.cpu, setup.gpu, setup.ram)}
            {setup.cpu && setup.gpu && setup.ram && <QuickMatcher />}
          </Box>
        </Box>
      </Box>
    </PageComponent>
  );
};

export default BuilderPage;
