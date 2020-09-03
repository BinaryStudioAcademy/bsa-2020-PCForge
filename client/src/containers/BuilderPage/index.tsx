import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import BuilderTitle from 'components/BuilderPage/BuilderTitle';
import { MenuItems } from 'common/enums/MenuItems';
import PageComponent from 'containers/PageComponent';
import BuilderSummary from 'components/BuilderPage/BuilderSummary';
import GroupComponent from 'components/BuilderPage/GroupComponent';

import Modal from 'components/BasicComponents/Modal';
import SaveSetupModal from 'components/BuilderPage/SaveSetupModal';
import { AssignmentReturn } from '@material-ui/icons';

import ModalAddRequest from 'containers/AddUserRequest';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import { UserRequestedType } from 'common/enums/UserRequestedType';

import { TypeGroupConfig, TypeFilterBuilder } from './types';
import { TypeSetup } from './reducer';
import {
  addComponentToSetupAction,
  initSetupAction,
  removeComponentFromSetupAction,
  resetSetupAction,
} from 'containers/BuilderPage/actions';

import { FilterName, GroupName } from './config';

import styles from 'containers/BuilderPage/styles.module.scss';
import QuickMatcher from 'containers/QuickMatcher';

type PropsType = {
  className?: string;
};

const BuilderPage = ({ className = '' }: PropsType): JSX.Element => {
  const [expanded, setExpanded] = useState<false | GroupName>(false);
  const [filter, setFilter] = useState<TypeFilterBuilder>({
    socketIdSet: new Set() as Set<number>,
    ramTypeIdSet: new Set() as Set<number>,
    sata: new Set() as Set<number>,
    m2: new Set() as Set<string>,
  });
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [displayAddRequestOpen, setDisplayAddRequestOpen] = useState(false);
  const showAddHardwareModal = () => {
    setDisplayAddRequestOpen(true);
  };
  const hideAddHardwareModal = () => {
    setDisplayAddRequestOpen(false);
  };
  const handleAddHardwareWindow = () => {
    displayAddRequestOpen ? hideAddHardwareModal() : showAddHardwareModal();
  };

  const showModal = () => {
    setIsModalActive(true);
  };
  const hideModal = () => {
    setIsModalActive(false);
  };

  const setup = useSelector((state: { setup: TypeSetup }) => state.setup);
  const dispatch = useDispatch();

  const resetFilter = () => {
    setFilter({ socketIdSet: new Set(), ramTypeIdSet: new Set(), sata: new Set(), m2: new Set() });
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

  const groupConfigs: TypeGroupConfig[] = [
    {
      group: GroupName.cpu,
      filter: filterForCpu,
      filters: {
        [FilterName.socket]: {
          enable: !setup[GroupName.motherboard],
        },
      },
    },
    {
      group: GroupName.gpu,
      filter: filter,
      filters: {},
    },
    {
      group: GroupName.ram,
      filter: filterForRam,
      filters: {
        [FilterName.ramtype]: {
          enable: !setup[GroupName.motherboard],
        },
      },
    },
    {
      group: GroupName.motherboard,
      filter: filterForMotherboard,
      filters: {
        [FilterName.socket]: {
          enable: !setup[GroupName.cpu],
        },
        [FilterName.ramtype]: {
          enable: !setup[GroupName.ram],
        },
        [FilterName.hdd]: {
          enable: !setup[GroupName.hdd] && !setup[GroupName.ssd],
        },
      },
    },
    {
      group: GroupName.powersupply,
      filter: filter,
      filters: {},
    },
    {
      group: GroupName.hdd,
      filter: filter,
      filters: {
        [FilterName.hdd]: {
          enable: !setup[GroupName.motherboard],
        },
      },
    },
    {
      group: GroupName.ssd,
      filter: filter,
      filters: {
        [FilterName.hdd]: {
          enable: !setup[GroupName.motherboard],
        },
      },
    },
  ];

  const groups = groupConfigs.map((config) => (
    <GroupComponent
      key={config.group}
      groupName={config.group}
      filter={config.filter}
      filtersUsed={config.filters}
      selectedComponent={setup[config.group]}
      onUpdateFilter={(filter) => setFilter(filter)}
      onAddComponent={(group, id) => dispatch(addComponentToSetupAction({ group, id }))}
      onRemoveSelectedComponent={(group) => dispatch(removeComponentFromSetupAction({ group }))}
      expanded={expanded}
      onChangeExpanded={setExpanded}
    />
  ));

  return (
    <PageComponent selectedMenuItemNumber={MenuItems.BuildSetup}>
      <Box className={`${styles.builderWrapper} ${className}`}>
        {isModalActive ? <SaveSetupModal onClose={hideModal} /> : null}
        <BuilderTitle
          isCanToSave={isCanToSaveSetup(setup)}
          showResetSetup={Object.values(setup).some((e) => !!e)}
          onResetSetup={() => dispatch(resetSetupAction())}
          showResetFilter={Object.values(filter).some((e) => !!e.size)}
          onResetFilter={resetFilter}
          onSaveSetup={showModal}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} lg={8} xl={9}>
            {groups}
          </Grid>
          <Grid item xs={12} lg={4} xl={3} className={styles.summary}>
            <BuilderSummary setup={setup} />
            {setup.cpu && setup.gpu && setup.ram && <QuickMatcher />}
            {displayAddRequestOpen ? (
              <ModalAddRequest onClose={hideAddHardwareModal} requestType={UserRequestedType.hardware} />
            ) : null}
            <Box className={styles.buttonWrapper}>
              <Tooltip
                title={
                  'If you can not find needed hardware, you can create a request to admin about adding it to site! '
                }
                arrow
              >
                <Button buttonType={ButtonType.secondary} onClick={handleAddHardwareWindow}>
                  Add Hardware
                </Button>
              </Tooltip>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </PageComponent>
  );
};

export default BuilderPage;
