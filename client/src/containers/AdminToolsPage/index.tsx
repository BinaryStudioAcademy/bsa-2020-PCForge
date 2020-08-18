import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
//import { Redirect } from 'react-router-dom';
import PageComponent from 'containers/PageComponent';
import ListItem from '@material-ui/core/ListItem';
import { MenuItems } from 'common/enums';
import Title from 'components/Title';
import { TotalInfoCard, ITotalInfoCard } from 'components/TotalInfoCard';
import { CardsName } from 'common/enums/AdminToolsTotalCard';
import PeopleIcon from '@material-ui/icons/People';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import HardwareIcon from 'components/NavigationBar/NavigationIcons/HardwareIcon';
import SetupIcon from 'components/NavigationBar/NavigationIcons/SetupIcon';
import { Routes } from 'common/enums';
import styles from './styles.module.scss';

const cardsList: Array<ITotalInfoCard> = [
  {
    name: CardsName.Users,
    count: 0,
    icon: <PeopleIcon style={{ color: 'white' }} />,
    createButton: false,
  },
  {
    name: CardsName.Hardwares,
    count: 0,
    icon: <HardwareIcon />,
    createButton: true,
    countOfRequests: 3,
    //() => alert('To do for hardware')
  },
  {
    name: CardsName.Setups,
    count: 0,
    icon: <SetupIcon />,
    createButton: false,
  },
  {
    name: CardsName.Games,
    count: 0,
    icon: <SportsEsportsOutlinedIcon style={{ color: 'white' }} />,
    createButton: true,
    countOfRequests: 2,
    onAdd: () => alert('To do for game'),
  },
];

const getValuesOfTotalCards = async () => {
  for (const CardItem in CardsName) {
    const index: number = cardsList.findIndex((card) => card.name === CardItem);
    cardsList[index].count = 3; //await getCount(); - should be request to server
  }
};

//const AdminToolsPage: React.FC<IProps> = (props) => { //: JSX.Element
const AdminToolsPage = ({ history }: RouteComponentProps): JSX.Element => {
  getValuesOfTotalCards();

  const goAddHardware = () => history.push(`${Routes.ADDITEM}/hardwares`); //<Redirect to={Routes.ADDITEM} /> //history.push(Routes.ADDHARDWARE);
  const indexHardware: number = cardsList.findIndex((card) => card.name === CardsName.Hardwares);
  cardsList[indexHardware].onAdd = goAddHardware;

  return (
    <PageComponent selectedMenuItemNumber={MenuItems.AdminTools}>
      <div className={styles.contentPage}>
        <div className={styles.pageHeader}>
          <Title title="Admin tools" subtitle="Manage hardware and game content, get site statistic" />
        </div>
        <div className={styles.contentMain}>
          <div className={styles.totalBlockContainer}>
            {cardsList.map((item: ITotalInfoCard, key) => (
              <ListItem key={`${key}-total-info-card`}>
                <TotalInfoCard
                  name={item.name}
                  count={item.count}
                  icon={item.icon}
                  createButton={item.createButton}
                  countOfRequests={item.countOfRequests}
                  onAdd={item.onAdd}
                />
              </ListItem>
            ))}
          </div>
          <div className={styles.chartContainer}></div> {/*TO DO*/}
          <div className={styles.notificationsContainer}></div> {/*TO DO*/}
        </div>
      </div>
    </PageComponent>
  );
};
export default AdminToolsPage;
