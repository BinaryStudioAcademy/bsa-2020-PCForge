import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import style from './styles.module.scss';
import Button from 'components/BasicComponents/Button';
import { Routes } from 'common/enums';

const NotFound = ({ history }: RouteComponentProps): JSX.Element => {
  const goHome = () => history.push(Routes.DEFAULT);

  return (
    <div className={style.wrapper}>
      <div className={style.holeWrapper}>
        <div className={style.hole}>
          <div className={style.wood}></div>
          <div className={style.hand}>
            <span className={style.fingerUp}></span>
            <span className={style.finger}></span>
            <span className={style.finger}></span>
            <span className={style.finger}></span>
            <span className={style.finger}></span>
          </div>
          <div className={style.arm}></div>
        </div>
      </div>
      <div className={style.buttonWrapper}>
        <Button onClick={goHome} variant={'text'}>
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
