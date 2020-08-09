import React from 'react';
import RootComponent from 'components/Root';
import SetupCard from 'components/SetupCard';
import classes from './styles.module.scss';
import { connect } from 'react-redux';
import TopFiveList from 'components/TopFiveList';
interface Setup {
  title: string;
  description: string;
  image?: string;
  cpu: string;
  gpu: string;
  ram: string;
}

interface I_Props {
  //Change it for mandatory prop when redux will be added
  setups?: Array<Setup>;
  userId?: string;
}
//Remove this mock data when we get info from server
const cards = [
  {
    title: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    description: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    image: 'https://ae01.alicdn.com/kf/HTB1O3NJipooBKNjSZPhq6A2CXXa2.jpg',
    cpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    gpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    ram: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    id: '1',
  },
  {
    title: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    description: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    image: 'https://ae01.alicdn.com/kf/HTB1O3NJipooBKNjSZPhq6A2CXXa2.jpg',
    cpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    gpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    ram: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    id: '1',
  },
  {
    title: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    description: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    image: 'https://ae01.alicdn.com/kf/HTB1O3NJipooBKNjSZPhq6A2CXXa2.jpg',
    cpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    gpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    ram: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    id: '1',
  },
  {
    title: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    description: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    image: 'https://ae01.alicdn.com/kf/HTB1O3NJipooBKNjSZPhq6A2CXXa2.jpg',
    cpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    gpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    ram: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    id: '1',
  },
  {
    title: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    description: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    image: 'https://ae01.alicdn.com/kf/HTB1O3NJipooBKNjSZPhq6A2CXXa2.jpg',
    cpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    gpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    ram: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    id: '1',
  },
  {
    title: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    description: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    image: 'https://ae01.alicdn.com/kf/HTB1O3NJipooBKNjSZPhq6A2CXXa2.jpg',
    cpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    gpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    ram: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    id: '1',
  },
  {
    title: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    description: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    image: 'https://ae01.alicdn.com/kf/HTB1O3NJipooBKNjSZPhq6A2CXXa2.jpg',
    cpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    gpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    ram: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    id: '1',
  },
];

const SetupPage: React.FC<I_Props> = ({ setups, userId }) => {
  const createCards = () => {
    //When has been added functionality for getting data from server, change 'Cards, to setups'
    const cardsElements = cards.map((setup) => {
      return (
        <SetupCard
          key={setup.id}
          imageSource={setup.image}
          setupName={setup.title}
          processor={setup.cpu}
          gpu={setup.gpu}
          ram={setup.ram}
        />
      );
    });

    return <div className={classes.cardsContainer}>{cardsElements}</div>;
  };

  return (
    <RootComponent
      pageTitle="Setups"
      selectedMenuItemNumber={1}
      leftComponent={createCards()}
      rightComponent={<TopFiveList />}
    />
  );
};

//When has been added functionality, change state type
// const mapStateToProps = (state: any) => {
//   return {
//     setups: state.setups,
//   };
// };

// connect(mapStateToProps)(SetupPage);

export default SetupPage;
