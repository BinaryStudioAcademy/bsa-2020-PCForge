import React from 'react';
import styles from './styles.module.scss';
import Input from 'components/BasicComponents/Input';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Select from 'components/BasicComponents/Select';
import AsyncSelect from 'components/BasicComponents/AsyncSelect'

export default function UserPage() {
  const gamesArray = [
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/342180/header_292x136.jpg?t=1594132736',
      title: 'title',
      releaseDate: '20.02.20',
    },
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/546560/header_292x136.jpg?t=1594314571',
      title: 'Half-life ALYX',
      releaseDate: '06.06.16',
    },
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/342180/header_292x136.jpg?t=1594132736',
      title: 'title',
      releaseDate: '20.02.20',
    },
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/546560/header_292x136.jpg?t=1594314571',
      title: 'Half-life ALYX',
      releaseDate: '06.06.16',
    },
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/342180/header_292x136.jpg?t=1594132736',
      title: 'title',
      releaseDate: '20.02.20',
    },
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/546560/header_292x136.jpg?t=1594314571',
      title: 'Half-life ALYX',
      releaseDate: '06.06.16',
    },
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/546560/header_292x136.jpg?t=1594314571',
      title: 'Half-life ALYX',
      releaseDate: '06.06.16',
    },
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/342180/header_292x136.jpg?t=1594132736',
      title: 'title',
      releaseDate: '20.02.20',
    },
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/546560/header_292x136.jpg?t=1594314571',
      title: 'Half-life ALYX',
      releaseDate: '06.06.16',
    },
  ];
  const setupArray = [
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
          </div>
          <Button buttonType={ButtonType.primary}>Edit</Button>
        </div>

        <div className={styles.preferencesSection}>
          <div className={styles.buttonsContainer}>
            <Button buttonType={ButtonType.primary}>Games</Button>
            <Button buttonType={ButtonType.secondary}>Setups</Button>
          </div>
          <Select inputLabel='cats' inputOptions={[{value:1, title: 'pet'}]}></Select>
          <Select inputLabel='cats' inputOptions={[{value:1, title: 'pet'}]}></Select>
          
          <UserPreferences className={styles.userPreferences} setups={setupArray}>
            <div>hello</div>
            
          </UserPreferences>
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
}

const GameCard: React.FC<GameCardProps> = ({ image, title, releaseDate }) => {
  return (
    <div className={styles.gameCard}>
      <div className={styles.gameTitle}>{title}</div>
      <div className={styles.gameImage}>
        <img src={image} alt="" />
      </div>
      <div>{releaseDate}</div>
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
      <div>{description}</div>
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
            <GameCard image={game.image} title={game.title} releaseDate={game.releaseDate} />
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

