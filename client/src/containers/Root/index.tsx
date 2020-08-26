import React, { ReactElement, Component } from 'react';
import classes from './styles.module.scss';
import * as Sentry from '@sentry/react';

interface IProps {
  children: React.ReactElement;
}

export class RootComponent extends Component<Record<string, unknown>, IProps> {
  render(): JSX.Element {
    return (
      <Sentry.ErrorBoundary onError={console.log}>
        <div className={classes.content}>{this.props.children}</div>
      </Sentry.ErrorBoundary>
    );
  }
}

export default RootComponent;
