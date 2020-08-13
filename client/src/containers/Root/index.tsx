import React, { ReactElement, Component } from 'react';
import classes from './styles.module.scss';
interface IProps {
  children: React.ReactElement;
}

export class RootComponent extends Component<Record<string, unknown>, IProps> {
  render(): JSX.Element {
    return <div className={classes.content}>{this.props.children}</div>;
  }
}

export default RootComponent;
