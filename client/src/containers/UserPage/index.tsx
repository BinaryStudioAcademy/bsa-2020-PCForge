import React, { useState } from 'react';
import styles from './styles.module.scss';
import Input from 'components/BasicComponents/Input';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import Link from 'components/BasicComponents/Link';

enum contentType {
  games,
  setups,
}

const generateKey = (pre:String) => {
  return `${pre}_${new Date().getTime()}`;
};

export default function UserPage() {
  const gamesArray = [
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/342180/header_292x136.jpg?t=1594132736',
      title: 'Arizona Sunshine',
      releaseDate: '20.02.20',
    },
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/546560/header_292x136.jpg?t=1594314571',
      title: 'Half-life ALYX',
      releaseDate: '06.06.16',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime nisi deleniti aliquam magni beatae?',
    },
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/342180/header_292x136.jpg?t=1594132736',
      title: 'Arizona Sunshine',
      releaseDate: '20.02.20',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime nisi deleniti aliquam magni beatae?',
    },
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/546560/header_292x136.jpg?t=1594314571',
      title: 'Half-life ALYX',
      releaseDate: '06.06.16',
    },
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/342180/header_292x136.jpg?t=1594132736',
      title: 'Arizona Sunshine',
      releaseDate: '20.02.20',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime nisi deleniti aliquam magni beatae?',
    },
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/546560/header_292x136.jpg?t=1594314571',
      title: 'Half-life ALYX',
      releaseDate: '06.06.16',
    },
  ];
  const setupsArray = [
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/testing-software-2-filled-outline/128/Testing_Software_2_-_Ps_Style_-_1-01-512.png',
      title: 'My Title',
      description: 'Here is my super cool setting for all the bloody cool games',
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/testing-software-2-filled-outline/128/Testing_Software_2_-_Ps_Style_-_1-01-512.png',
      title: 'My Title',
      description: 'Here is my super cool setting for all the bloody cool games',
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/testing-software-2-filled-outline/128/Testing_Software_2_-_Ps_Style_-_1-01-512.png',
      title: 'My Title',
      description: 'Here is my super cool setting for all the bloody cool games',
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/testing-software-2-filled-outline/128/Testing_Software_2_-_Ps_Style_-_1-01-512.png',
      title: 'My Title',
      description: 'Here is my super cool setting for all the bloody cool games',
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/testing-software-2-filled-outline/128/Testing_Software_2_-_Ps_Style_-_1-01-512.png',
      title: 'My Title',
      description: 'Here is my super cool setting for all the bloody cool games',
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/testing-software-2-filled-outline/128/Testing_Software_2_-_Ps_Style_-_1-01-512.png',
      title: 'My Title',
      description: 'Here is my super cool setting for all the bloody cool games',
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/testing-software-2-filled-outline/128/Testing_Software_2_-_Ps_Style_-_1-01-512.png',
      title: 'My Title',
      description: 'Here is my super cool setting for all the bloody cool games',
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/testing-software-2-filled-outline/128/Testing_Software_2_-_Ps_Style_-_1-01-512.png',
      title: 'My Title',
      description: 'Here is my super cool setting for all the bloody cool games',
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/testing-software-2-filled-outline/128/Testing_Software_2_-_Ps_Style_-_1-01-512.png',
      title: 'My Title',
      description: 'Here is my super cool setting for all the bloody cool games',
    },
  ];

  const [editableInput, setEditableInput] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [name, setName] = useState('Takeshi');
  const [email, setEmail] = useState('Takeshi@gmail');

  const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleClick = (event: React.MouseEvent) => {
    setEditableInput(!editableInput);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className={styles.everything}>
      <div className={styles.userPageContainer}>
        <div className={styles.userInfo}>
          <div className={styles.userImage}>
            <img src="https://i.pinimg.com/originals/6f/6b/d8/6f6bd86caa6488dc3ac3fb8b1f74c0cb.jpg" alt="" />
          </div>
          <div className={styles.userData}>
            <Input
              disabled={editableInput ? false : true}
              className={editableInput ? styles.autoFocused : ''}
              icon="Face"
              value={name}
              onChange={handleNameChange}
            />
            <Input
              disabled={editableInput ? false : true}
              className={editableInput ? styles.autoFocused : ''}
              icon="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <Button onClick={handleClick} buttonType={ButtonType.primary}>
              {editableInput ? 'Save' : 'Edit'}
            </Button>
          </div>
        </div>

        <div className={styles.preferencesSection}>
          <AppBar position="static" className={styles.tabsBar}>
            <Tabs value={selectedTab} onChange={handleChange}>
              <Tab label="Games" />
              <Tab label="Setups" />
            </Tabs>
          </AppBar>
          {selectedTab === 0 && <UserPreferences className={styles.userPreferences} games={gamesArray} />}
          {selectedTab === 1 && <UserPreferences className={styles.userPreferences} setups={setupsArray} />}
        </div>
      </div>
    </div>
  );
}

interface GameCardProps {
  image: string;
  title: string;
  releaseDate?: string;
  description?: string;
}

const GameCard: React.FC<GameCardProps> = ({ image, title, releaseDate, description }) => {
  return (
    <div className={styles.gameCard}>
      <div className={styles.gameImage}>
        <img src={image} alt="" />
      </div>
      <div className={styles.gameFooter}>
        <div className={styles.gameTitle}>{title}</div>
        <div>{releaseDate}</div>
      </div>
      {description && <div className={styles.gameDescription}>{description}</div>}
    </div>
  );
};

interface SetupCardProps {
  image: string;
  title: string;
  description?: string;
  className?: string;
}

const SetupCard: React.FC<SetupCardProps> = ({ image, title, description, className }) => {
  const setupStyle = styles.setupCard + (` ${className}` || '');
  return (
    <div className={setupStyle}>
      <div className={styles.setupTitle}>{title}</div>
      <div className={styles.setupImage}>
        <img src={image} alt="" />
      </div>
      <div className={styles.setupDescription}>{description}</div>
      <Button icon="Build" buttonType={ButtonType.secondary}>
        Go to Setup
      </Button>
    </div>
  );
};

interface UserPreferencesProps {
  games?: GameCardProps[];
  setups?: SetupCardProps[];
  className?: string;
}

const UserPreferences: React.FC<UserPreferencesProps> = (props) => {
  const { games, setups, className } = props;
  return (
    <>
      {games ? (
        <>
        <div className={styles.buttonPlacement}>

          <Button className={styles.addGameButton} buttonType={ButtonType.primary} icon="Add">
            Add Game
          </Button>
        </div>
          <div className={className}>
            {games.map((game) => (
              <GameCard
                key={generateKey(game.title)}
                image={game.image}
                title={game.title}
                releaseDate={game.releaseDate}
                description={game.description}
              />
            ))}
          </div>
        </>
      ) : (
        ' '
      )}

      {setups ? (
        <>
        <div className={styles.buttonPlacement}>
          <Link className={styles.setupLink} icon="Build">
            Builder
          </Link>
          </div>
          <div className={className}>
            {setups.map((setup) => (
              <SetupCard
                key={generateKey(setup.title)}
                image={setup.image}
                title={setup.title}
                description={setup.description}
              />
            ))}
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
};
