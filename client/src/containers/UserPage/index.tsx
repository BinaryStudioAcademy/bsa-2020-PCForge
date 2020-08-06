import React from 'react';
import styles from './styles.module.scss';
import Input from 'components/BasicComponents/Input';
import Button, { ButtonType } from 'components/BasicComponents/Button'
export default function UserPage() {
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
              <Input disabled icon="Face" value="Takeshi Kovach"/>
              <Input disabled icon="Email" value="Takeshi@gmail.com"/>
          </div>
          <Button buttonType={ButtonType.primary}>Edit</Button>
        </div>
        <div className={styles.userPreferences}>
          <p className={styles.favouritesTitle}>Favourites</p>
          <div className={styles.favouriteGamesWrapper}>
          <GameCard
            image={"https://steamcdn-a.akamaihd.net/steam/apps/342180/header_292x136.jpg?t=1594132736"}
            title={'Arizona Sunshine'}
          />
          <GameCard
            image={"https://steamcdn-a.akamaihd.net/steam/apps/546560/header_292x136.jpg?t=1594314571"}
            title={'Half-Life Alyx'}
          />
          
          <GameCard
            image={"https://steamcdn-a.akamaihd.net/steam/apps/342180/header_292x136.jpg?t=1594132736"}
            title={'Arizona Sunshine'}
          />
          <GameCard
            image={"https://steamcdn-a.akamaihd.net/steam/apps/546560/header_292x136.jpg?t=1594314571"}
            title={'Half-Life Alyx'}
          />
          <GameCard
            image={"https://steamcdn-a.akamaihd.net/steam/apps/342180/header_292x136.jpg?t=1594132736"}
            title={'Arizona Sunshine'}
          />
          <GameCard
            image={"https://steamcdn-a.akamaihd.net/steam/apps/546560/header_292x136.jpg?t=1594314571"}
            title={'Half-Life Alyx'}
          />
          </div>
        
        </div>
      </div>
      <div className={styles.fakeFooter}>Fake Footer</div>
    </div>
  );
}

interface GameInfoProps {
  image: string;
  title: string;
  releaseDate?: string;
}

const GameCard: React.FC<GameInfoProps> = ({ image, title, releaseDate }) => {
  return (
    <div className={styles.gameCard}>
      <div className={styles.gameTitle}>{title}</div>
      <div className={styles.gameImage}>
        <img src={image} alt="" />
      </div>
      <div>{releaseDate}</div>
      <p>Maybe some extra info?</p>
    </div>
  );
};
// "https://steamcdn-a.akamaihd.net/steam/apps/546560/header_292x136.jpg?t=1594314571"
