import React, { useState } from 'react';
import styles from './styles.module.scss';
import Input from 'components/BasicComponents/Input';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import { Tabs, Tab, AppBar } from '@material-ui/core';

enum contentType {
  games,
  setups,
}

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
  ];
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div className={styles.everything}>
      <div className={styles.header}>
        <p>Fake Menu</p>
        <p>something</p>
        <p>something</p>
        <p>something</p>
        <p>something</p>
      </div>
      <div className={styles.userPageContainer}>
        <div className={styles.userInfo}>
          <div className={styles.userImage}>
            <img src="https://i.pinimg.com/originals/6f/6b/d8/6f6bd86caa6488dc3ac3fb8b1f74c0cb.jpg" alt="" />
          </div>
          <div className={styles.userData}>
            <Input disabled icon="Face" value="Takeshi Kovach" />
            <Input disabled icon="Email" value="Takeshi@gmail.com" />
            <Button buttonType={ButtonType.primary}>Edit</Button>
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
      <div className={styles.fakeFooter}>Fake Footer</div>
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
      <div className={styles.gameTitle}>{title}</div>
      <div className={styles.gameImage}>
        <img src={image} alt="" />
      </div>
      <div>{releaseDate}</div>
      <div className={styles.gameDescription}>{description}</div>
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
  let setupStyle = styles.setupCard + (` ${className}` || '');
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
        <div className={className}>
          {games.map((game) => (
            <GameCard
              image={game.image}
              title={game.title}
              releaseDate={game.releaseDate}
              description={game.description}
            />
          ))}
        </div>
      ) : (
        ' '
      )}

      {setups ? (
        <div className={className}>
          {setups.map((setup) => (
            <SetupCard image={setup.image} title={setup.title} description={setup.description} />
          ))}
        </div>
      ) : (
        ''
      )}
    </>
  );
};

// <Button onClick={handleGamesClick} buttonType={contentToShow == contentType.games ? ButtonType.primary : ButtonType.secondary}>
// Games
// </Button>
// <Button onClick={handleSetupsClick} buttonType={contentToShow == contentType.setups? ButtonType.primary: ButtonType.secondary}>Setups</Button>

// const [contentToShow, setContentToShow] = useState(contentType.games);
// const handleGamesClick = () => {
//   setContentToShow(contentType.games);
// }
// const handleSetupsClick = () => {
//   setContentToShow(contentType.setups);
// }
