import React from 'react';
import classes from './styles.module.scss';

interface I_Info_Item {
  title: string;
  description: string;
  image: string;
  id: string;
  date?: string;
}

interface I_Props {
  info: Array<I_Info_Item>;
}
//Add props types, when will we have props
// const TopFiveList:React.FC<I_Info_Item> = () => {
const TopFiveList: React.FC = () => {
  //Remove const info it when we will have props
  const info = [
    {
      title: 'fdfddf sfjsdf jkdsfjksdf jksdfj ksd',
      description:
        'Lorejf jfjd dj ddskfjk f jfjd dj ddskfjk f jfjd dj ddskfjk f jfjd dj ddskfjk f jfjd dj ddskfjksd ddjf hsfjdkdf sdjf sjdfhsdfjk dfh ds fjd fds',
      image: 'https://ae01.alicdn.com/kf/HTB1O3NJipooBKNjSZPhq6A2CXXa2.jpg',
      id: '1',
    },
    {
      title: 'fdfddf sfjsdf jkdsfjksdf jksdfj ksd',
      description: 'Lorejf jfjd dj ddskfjksd ddjf hsfjdkdf sdjf sjdfhsdfjk dfh ds fjd fds',
      image: 'https://ae01.alicdn.com/kf/HTB1O3NJipooBKNjSZPhq6A2CXXa2.jpg',
      id: '2',
    },
    {
      title: 'fdfddf sfjsdf jkdsfjksdf jksdfj ksd',
      description: 'Lorejf jfjd dj ddskfjksd ddjf hsfjdkdf sdjf sjdfhsdfjk dfh ds fjd fds',
      image: 'https://ae01.alicdn.com/kf/HTB1O3NJipooBKNjSZPhq6A2CXXa2.jpg',
      id: '3',
    },
    {
      title: 'fdfddf sfjsdf jkdsfjksdf jksdfj ksd',
      description: 'Lorejf jfjd dj ddskfjksd ddjf hsfjdkdf sdjf sjdfhsdfjk dfh ds fjd fds',
      image: 'https://ae01.alicdn.com/kf/HTB1O3NJipooBKNjSZPhq6A2CXXa2.jpg',
      id: '4',
    },
    {
      title: 'fdfddf sfjsdf jkdsfjksdf jksdfj ksd',
      description: 'Lorejf jfjd dj ddskfjksd ddjf hsfjdkdf sdjf sjdfhsdfjk dfh ds fjd fds',
      image: 'https://ae01.alicdn.com/kf/HTB1O3NJipooBKNjSZPhq6A2CXXa2.jpg',
      date: 'dsdsds',
      id: '5',
    },
  ];

  const createTopFiveListItem = () => {
    return info.map((item) => {
      return (
        <div key={item.id} className={classes.itemWrapper}>
          <div className={classes.item}>
            <img src={item.image} alt={item.title} className={classes.itemImage} />
            <div className={classes.itemText}>
              <h5 className={classes.itemTextTitle}>{item.title}</h5>
              <p className={classes.itemTextDescription}>{item.description}</p>
              {item.date ? <p className={classes.itemTextDate}>{item.date}</p> : null}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={classes.topFiveList}>
      <h4 className={classes.header}>Top 5</h4>
      {createTopFiveListItem()}
    </div>
  );
};

export default TopFiveList;
