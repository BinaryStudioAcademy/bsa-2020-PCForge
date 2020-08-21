import React, { ReactElement, useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import Spinner from 'components/Spinner';
import ButtonAdd from 'components/BuilderPage/ButtonAdd';
import { CardsName } from 'common/enums/AdminTools/CardsName';
import { getAllGames, IGameFilter } from 'api/services/gameService';
import { getAllCpu } from 'api/services/cpuService';
import { getAllUsers } from 'api/services/userService';
import { getAllGpu } from 'api/services/gpuService';
import { getAllMotherboard } from 'api/services/motherboardService';
import { getAllPowersupplies } from 'api/services/powersupplyService';
import { getAllRam } from 'api/services/ramService';
import { getAllSocket } from 'api/services/socketService';
import { getAllUsersRequsts } from 'api/services/addUserRequestService';
import { IUserRequestFilter } from 'api/services/addUserRequestService';
import { UserRequestedType } from 'common/enums/UserRequestedType';

import { theme } from 'assets/jss/theme';
import styles from './styles.module.scss';
import { BrandingWatermark, Error } from '@material-ui/icons';

export interface ITotalInfoCard {
  name: CardsName;
  count: number;
  icon: ReactElement;
  createButton: boolean;
  countOfRequests?: number;
  onAdd?: () => void;
}

export interface ICard {
  name: CardsName;
  icon: JSX.Element;
  onAdd?: () => void;
  filter?: IUserRequestFilter;
}

export const TotalInfoCard = ({ name, icon, onAdd, filter }: ICard): JSX.Element => {
  //const TotalInfoCard: React.FC<Props> = ({filteredCount, card, getUsersRequests}): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState<number | undefined>();
  const [countOfRequests, setcountOfRequests] = useState<number | undefined>();
  const getCount = async (name: CardsName) => {
    setLoading(true);
    console.log(loading);

    try {
      switch (name) {
        case CardsName.Games:
          {
            const res = await getAllGames({ name: '' });
            setCount(res.meta.globalCount);
            console.log(res.meta.globalCount);

            const resHardwareRequests = await getAllUsersRequsts({ requestedType: UserRequestedType.game });
            setcountOfRequests(resHardwareRequests.meta.countAfterFiltering);
          }
          break;
        case CardsName.Hardwares:
          {
            const resCPU = await getAllCpu({ name: '' });
            const resGPU = await getAllGpu({});
            const resMotherboard = await getAllMotherboard({});
            const resPowersupplies = await getAllPowersupplies({});
            const resRAM = await getAllRam({});
            const resSocket = await getAllSocket({});

            const totalCount =
              resCPU.meta.globalCount +
              resGPU.meta.globalCount +
              resMotherboard.meta.globalCount +
              resPowersupplies.meta.globalCount +
              resRAM.meta.globalCount +
              resSocket.meta.globalCount;
            setCount(totalCount);
            console.log(totalCount);

            const resGPURequests = await getAllUsersRequsts({ requestedType: UserRequestedType.gpu });
            const resCPURequests = await getAllUsersRequsts({ requestedType: UserRequestedType.cpu });
            const resMBRequests = await getAllUsersRequsts({ requestedType: UserRequestedType.motherboard });
            const resPSRequests = await getAllUsersRequsts({ requestedType: UserRequestedType.powerSupply });
            const resRAMRequests = await getAllUsersRequsts({ requestedType: UserRequestedType.ram });
            const resHardwareRequests =
              resGPURequests.meta.countAfterFiltering +
              resCPURequests.meta.countAfterFiltering +
              resMBRequests.meta.countAfterFiltering +
              resPSRequests.meta.countAfterFiltering +
              resRAMRequests.meta.countAfterFiltering;
            setcountOfRequests(resHardwareRequests);
          }
          break;
        case CardsName.Setups:
          {
            const res = 2; //await getAllSetups({}); add after add setup API
            setCount(2); //setCount(res.meta.globalCount);
            console.log(0);
          }
          break;
        case CardsName.Users:
          {
            const res = await getAllUsers();
            console.log(res.length);
            setCount(res.length); // change to using meta.globalCount after apdate user API
          }
          break;
        default:
          {
            //throw new Error();
          }
          break;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      console.log(loading);
    }
  };

  useEffect(() => {
    getCount(name);
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <ThemeProvider theme={theme}>
      <Box className={styles.cardContainer}>
        <Box>
          <h3 className={styles.cardTitle}>Total {name}</h3>
          <Box>{count && count >= 0 ? count : '...'}</Box>
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
