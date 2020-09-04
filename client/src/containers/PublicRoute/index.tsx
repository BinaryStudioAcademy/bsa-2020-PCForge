import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginByTokenRequest } from 'containers/Auth/actions';
import { Routes } from 'common/enums/routes';
import { RootState } from 'redux/rootReducer';
import * as Sentry from '@sentry/react';

type PropsType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any; //what type?
  exact?: boolean;
  path: Routes | string;
  className?: string;
};

const SentryRoute = Sentry.withSentryRouting(Route);

const PublicRoute = ({ component: Component, ...rest }: PropsType) => {
  const isAuthorized = useSelector((state: RootState) => !!state.auth.user?.id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthorized) dispatch(loginByTokenRequest());
  }, []);

  return (
    <SentryRoute
      {...rest}
      render={(props) => (isAuthorized ? <Redirect to={Routes.DEFAULT} /> : <Component {...props} />)}
    />
  );
};

export default PublicRoute;
