import React from 'react';
import PageComponent from 'containers/PageComponent';
import { MenuItems } from 'common/enums';

const Home = () => {
  return (
    <PageComponent selectedMenuItemNumber={MenuItems.Home}>
      <div>Home</div>
    </PageComponent>
  );
};

export default Home;
