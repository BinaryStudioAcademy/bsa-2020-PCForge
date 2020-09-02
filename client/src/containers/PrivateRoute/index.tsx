import React, { useEffect, useState } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginByTokenRequest } from 'containers/Auth/actions';
import { Routes } from 'common/enums/routes';
import { RootState } from 'redux/rootReducer';
import * as Sentry from '@sentry/react';
import Spinner from 'components/Spinner';

type PropsType = {
  // eslint-disable-next-line
  component: any; //what type?
  exact?: boolean;
  path: Routes | string;
  className?: string;
};

const SentryRoute = Sentry.withSentryRouting(Route);

const PrivateRoute = ({ component: Component, ...rest }: PropsType) => {
  const isAuthorized = useSelector((state: RootState) => !!state.auth.user?.id);
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthorized) dispatch(loginByTokenRequest());
    else setIsFirstLoading(false);
  }, []);

  useEffect(() => {
    if (!isAuthorized) setIsFirstLoading(isLoading && setIsFirstLoading ? false : isFirstLoading);
  }, [isLoading]);

  return (
    <SentryRoute
      {...rest}
      render={(props: RouteComponentProps) =>
        isFirstLoading ? (
          <Spinner page={true} />
        ) : isAuthorized || isLoading ? (
          <Component {...props} />
        ) : (
          <Redirect to={Routes.LOGIN} />
        )
      }
    />
  );
};

export default PrivateRoute;
