/* eslint-disable @typescript-eslint/ban-types */
import { Game } from 'common/models/game';

import React from 'react';
import styles from './styles.module.scss';
import LiveSearch from 'components/BasicComponents/LiveSearch';

interface Props {
  games: Game[];
  onGameChanged: (game: Game) => void;
}

const TestDifferentGame: React.FC<Props> = ({ games, onGameChanged }): JSX.Element => {
  const getInputOptions = () => {
    return games.map((game, index) => ({ title: game.name }));
  };

  const onSelect = (event: React.ChangeEvent<{}>, value: { title: string } | null) => {
    if (!value) return;
    const game = games.find((game) => game.name === value.title);
    if (game) onGameChanged(game);
  };

  return (
    <aside className={styles.mainContainer}>
      <h3 className={styles.mainHeader}>Test different game</h3>
      <LiveSearch items={getInputOptions()} onItemSelected={onSelect} label={'Search'} />
    </aside>
  );
};

export default TestDifferentGame;
