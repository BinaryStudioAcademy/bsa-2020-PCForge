import React from 'react';
import PageComponent from 'containers/PageComponent';
import { MenuItems } from 'common/enums';
import Title from './components/Title';
import CardDisplay from './components/CardsDisplay';

const Home = (): JSX.Element => {
  const setups = [{
    title: 'My game Setup',
    image: "https://tecngoodness.files.wordpress.com/2016/09/prose.png?w=405",
    description: "a lot of thigns here",
  },
  {
    title: 'My game Setup 2',
    image: "https://tecngoodness.files.wordpress.com/2016/09/prose.png?w=405",
    description: "a lot of thigns here",
  },
  {
    title: 'My game Setup 3',
    image: "https://tecngoodness.files.wordpress.com/2016/09/prose.png?w=405",
    description: "a lot of thigns here",
  },
  {
    title: 'My game Setup 4',
    image: "https://tecngoodness.files.wordpress.com/2016/09/prose.png?w=405",
    description: "a lot of thigns here",
  },
 ]

  
  return (
    <PageComponent selectedMenuItemNumber={MenuItems.Home}>
      <>
        <Title />
        <CardDisplay setups={setups}/>
      </>
    </PageComponent>
  );
};

export default Home;
