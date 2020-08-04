import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from 'common/enums';
import Link from '../components/basicComponents/Link';
import Button from '../components/basicComponents/Button';
import Input from '../components/basicComponents/Input';

export default class App extends Component {
  render() {
    const toShow = (
      <>
      <Link onClick={()=>alert('hi from link')}>Link</Link>
      <Button onClick={()=>alert('hi from Button')}>Button</Button>
      <Input onChange={(e)=>alert(e.target.value)}>Input</Input>
      </>
    )
    return (
      <Switch>
        <Route exact path={Routes.DEFAULT} component={() => <div>{toShow}</div>} />
      </Switch>
    );
  }
}
