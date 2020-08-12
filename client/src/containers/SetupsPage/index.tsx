import React from 'react';
// import RootComponent from 'components/Root';
import SetupCard from 'components/SetupCard';
import classes from './styles.module.scss';
import { connect } from 'react-redux';
import TopFiveList from 'components/TopFiveList';
import RatingBox from 'components/RatingBox';
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
    id: '0000',
    rating: 4,
    comments: 5,
  },
  {
    title: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    description: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    image: 'https://cdn.arstechnica.net/wp-content/uploads/2017/09/DSC09572.jpg',
    cpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    gpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    ram: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    id: '0001',
    rating: 4,
    comments: 3,
  },
  {
    title: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    description: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    image: 'https://i.gifer.com/BnqM.gif',
    cpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    gpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    ram: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    id: '0002',
    rating: 4,
    comments: 4,
  },
  {
    title: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    description: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    image: 'https://nerdtechy.com/wp-content/uploads/2019/01/rgb-led-kit.jpg',
    cpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    gpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    ram: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    id: '0003',
    rating: 4,
    comments: 3,
  },
  {
    title: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    description: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    image: 'https://cdn.wccftech.com/wp-content/uploads/2018/10/DSC_0572-Custom.jpg',
    cpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    gpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    ram: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    id: '0004',
    rating: 4,
    comments: 3,
  },
  {
    title: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    description: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    image: 'https://ae01.alicdn.com/kf/HTB1O3NJipooBKNjSZPhq6A2CXXa2.jpg',
    cpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    gpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    ram: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    id: '0005',
    rating: 4,
    comments: 3,
  },
  {
    title: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    description: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    image: 'https://cdn.wccftech.com/wp-content/uploads/2018/10/DSC_0572-Custom.jpg',
    cpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    gpu: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    ram: 'Lorem ipsum dos ertcse nodi types francp dikej slnjcclvjdf',
    id: '0006',
    rating: 4,
    comments: 1,
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
          comments={setup.comments}
          rating={setup.rating}
        />
      );
    });

    return <div className={classes.cardsContainer}>{cardsElements}</div>;
  };

  return null;
  // <RootComponent
  //   pageTitle="Setups"
  //   selectedMenuItemNumber={1}
  //   leftComponent={createCards()}
  //   rightComponent={<TopFiveList />}
  // />
};

//When has been added functionality, change state type
// const mapStateToProps = (state: any) => {
//   return {
//     setups: state.setups,
//   };
// };

// connect(mapStateToProps)(SetupPage);

export default SetupPage;
