import React from 'react';
import PageComponent from 'containers/PageComponent';
import { MenuItems } from 'common/enums';

const Home = (): JSX.Element => {
  return (
    <PageComponent selectedMenuItemNumber={MenuItems.Home}>
      <div style={{marginTop: "100px", display: "flex", fontSize: "2em", flexDirection: "column"}} >
        <h1 style={{ marginBottom: 0, fontSize: "3em"}}>PCForge</h1>
        <h2 style={{ marginTop: 0 }}>Hand-forged gaming setups</h2>
      </div>
    </PageComponent>
  );
};

export default Home;
