import React, { ReactElement } from 'react';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import ButtonAdd from 'components/BuilderPage/ButtonAdd';
import { CardsName } from 'common/enums/AdminTools/CardsName';

import { theme } from 'assets/jss/theme';
import styles from './styles.module.scss';

export interface ITotalInfoCard {
  name: CardsName;
  count: number;
  icon: ReactElement;
  countOfRequests?: number;
  onAdd?: () => void;
}

export const TotalInfoCard = (props: ITotalInfoCard): JSX.Element => {
  const { name, count, icon, countOfRequests, onAdd } = props;

  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.cardContainer}>
        <Box>
          <h3 className={styles.cardTitle}>Total {name}</h3>
          <Box>{count}</Box>
        </Box>
        <Box className={countOfRequests && countOfRequests > 0 ? styles.boxBadget : ''}>
          {count && count > 0 ? (
            <Tooltip title={`You have new ${countOfRequests} requests of ${name}`} placement="right-start" arrow>
              <Badge color="primary" badgeContent={countOfRequests}>
                <div className={styles.icon}>{icon}</div>
              </Badge>
            </Tooltip>
          ) : (
            <div className={styles.icon}>{icon}</div>
          )}
          {onAdd ? <ButtonAdd className={styles.buttonAdd} onClick={onAdd} /> : null}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default TotalInfoCard;
