import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import BuilderTitle from 'components/BuilderPage/BuilderTitle';
import { ComponentGroups, TypeGroupConfig, TypeFilterBuilder } from './types';
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
import { FilterName, GroupName } from './config';
import GroupComponent from '../../components/BuilderPage/GroupComponent';

type PropsType = {
  className?: string;
};

const BuilderPage = ({ className = '' }: PropsType): JSX.Element => {
  const [expanded, setExpanded] = useState<false | ComponentGroups | GroupName>(false); // todo: del ComponentGroups
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
      },
    },
    {
      group: GroupName.powersupply,
      filter: filter,
      filters: {},
    },
  ];

  const groups = groupConfigs.map((config) => (
    <GroupComponent
      key={config.group}
      cfg={config}
      // setup={setup}
      // filter={filterForCpu}
      // showFilters={{ socket: !setup.motherboard, ramType: !setup.motherboard }}
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
      <Box className={styles.builderWrapper}>
        <BuilderTitle
          showResetSetup={Object.values(setup).some((e) => !!e)}
          onResetSetup={() => dispatch(resetSetupAction())}
          showResetFilter={Object.values(filter).some((e) => !!e.size)}
          onResetFilter={resetFilter}
        />
        <Box>{groups}</Box>
      </Box>
    </PageComponent>
  );
};

export default BuilderPage;
