import React from 'react';
import PageComponent from 'containers/PageComponent';
import { MenuItems } from 'common/enums';
import Title from './components/Title';
import CardDisplay from './components/CardsDisplay';

const Home = (): JSX.Element => {


  const renderContent = () => {
  
  }
  return (
    <PageComponent selectedMenuItemNumber={MenuItems.Home}>
      <>
      <Title />
      <CardDisplay />
      </>
    </PageComponent>
  );
};

export default Home;
