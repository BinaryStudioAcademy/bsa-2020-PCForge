import React from 'react';
import styles from './styles.module.scss';
import { PCSetup } from 'common/models/setup';
import PcComponentView from 'components/SetupComponents/PcComponentView';
import SetupCard from 'components/SetupComponents/SetupCard';
import Container from '@material-ui/core/Container';
import SetupPageComments from 'components/SetupComponents/Comments';
import TopGames from 'components/ChartComponents/TopGames';

interface Props {
  setup: PCSetup;
}

const ViewSetupPage: React.FC<Props> = (props): JSX.Element => {
  const { cpu, gpu, motherBoard, powerSupply, ram, comments } = mockSetup();
  return (
    <div className={styles.setupPageRoot}>
      <h1>PC setup</h1>
      <div className={styles.contentWrapper}>
        <Container className={styles.setupsDetails}>
          <SetupCard setup={mockSetup()} />
          <div className={[styles.underline, styles.noMarginTop].join(' ')}></div>
          <PcComponentView
            title="Processor"
            pcComponent={cpu}
            neededProperties={{
              name: 'Name',
              cores: 'Cores',
              clockspeed: 'Clock Speed',
              class: 'Class',
              tdp: 'Thermal design power',
            }}
          />
          <PcComponentView
            title="Graphics"
            pcComponent={gpu}
            neededProperties={{
              name: 'Name',
              interface: 'Interface',
              memorySize: 'Memory',
              opengl: 'OpenGL',
              tdp: 'Thermal design power',
            }}
          />
          <PcComponentView
            title="RAM"
            pcComponent={ram}
            neededProperties={{ name: 'Name', memorySize: 'Memory', frequency: 'Frequency' }}
          />
          <PcComponentView title="Motherboard" pcComponent={motherBoard} neededProperties={{ name: 'Name' }} />
          <PcComponentView title="Power Supply" pcComponent={powerSupply} neededProperties={{ name: 'Name' }} />
          <div className={styles.underline}></div>
          <SetupPageComments comments={comments} />
        </Container>
        <div className={styles.asideItems}>
          <TopGames games={[]} />
        </div>
      </div>
    </div>
  );
};

function mockSetup(): PCSetup {
  return {
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
    title: 'Example PC setup',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://cdn.mos.cms.futurecdn.net/3LRrBeYMnjFsAD5DMZ9qU5.jpg',
    cpu: {
      id: 1,
      class: 'cpu class',
      clockspeed: 25,
      cores: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'Example cpu name',
      performance: 63,
      tdp: 23,
    },
    gpu: {
      id: 1,
      coreClocks: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
      interface: 'example interface name',
      memorySize: 34,
      name: 'Example gpu name',
      opengl: 'open gl meta',
      performance: 41,
      tdp: 23,
    },
    motherBoard: {
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'Mother board name',
    },
    powerSupply: {
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'powerSupply name',
      power: 24,
    },
    ram: {
      createdAt: new Date(),
      updatedAt: new Date(),
      frequency: 23,
      id: 1,
      memorySize: 36,
      name: 'Ram name',
      power: 100,
    },
    comments: [
      {
        id: 1,
        authorId: 1,
        author: 'Alexandr Lesiv',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        createdAt: new Date(),
        rating: 4,
      },
      {
        id: 2,
        authorId: 1,
        author: 'Alexandr Lesiv',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        createdAt: new Date(),
        rating: 3,
      },
    ],
  };
}

export default ViewSetupPage;
