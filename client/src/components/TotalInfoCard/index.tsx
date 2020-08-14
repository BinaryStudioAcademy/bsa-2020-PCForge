import React, { ReactElement } from 'react';
import Box from '@material-ui/core/Box';
import { ThemeProvider} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import ButtonAdd from 'components/BuilderPage/ButtonAdd';
import { CardsName } from 'common/enums/AdminToolsTotalCard';
import { theme } from 'assets/jss/theme';
import styles from './styles.module.scss';
import { Title } from '@material-ui/icons';
import HardwareIcon from 'components/NavigationBar/NavigationIcons/HardwareIcon';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import createTypography from '@material-ui/core/styles/createTypography';

export interface ITotalInfoCard {
  name: CardsName;
  count: number;
  icon: ReactElement;
  createButton: boolean;
  countOfRequests?: number;
  onAdd?: () => void;
};

//export const TotalInfoCard = (props: ITotalInfoCard): JSX.Element => {
export const TotalInfoCard: React.FC<ITotalInfoCard> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.cardContainer}>
        <Box>
          <h3 className={styles.cardTitle}>Total {props.name}</h3>
          <Box>{props.count}</Box>
        </Box>
        <Box>
          { props.countOfRequests && props.countOfRequests > 0 // Badge with tooltip item - idea for admin notification
            ? <Tooltip title={`You have new ${props.countOfRequests} requests of ${props.name}`} placement="right-start" arrow>
                <Badge color="primary" badgeContent={props.countOfRequests}>
                  <div className={styles.icon}>{props.icon}</div>
                </Badge>
              </Tooltip>
            : <div className={styles.icon}>{props.icon}</div>
          }
          { props.onAdd
            ? <ButtonAdd className={styles.buttonAdd} onClick={props.onAdd} />
            : null
          }

        </Box>
      </Box>
    {/* <Card className={styles.cardContainer}>
      <CardContent>
        <Typography>Total {props.name}</Typography>
        <Badge badgeContent={props.countOfRequests} className={styles.badge}>
          <div className={styles.icon}>{props.icon}</div>
        </Badge>
        <Typography>{props.count}</Typography>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card> */}
    </ThemeProvider>
  );
};
