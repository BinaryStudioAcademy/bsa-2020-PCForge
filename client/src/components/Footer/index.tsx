import React from 'react';

import classes from './styles.module.scss';

const Footer = (): JSX.Element => (
  <div className={classes.footer}>
    <div className={classes.wrapper}>
      <div className={classes.item}>
        <h2 className={classes.footerTitle}>PCForce</h2>
        <span className={classes.listItem}>Build your awesome PC with us!</span>
      </div>
      <div className={classes.listWrapper}>
        <div className={classes.item}>
          <h4 className={classes.title}>Explore</h4>
          <ul className={classes.list}>
            <li className={classes.listItem}>Home</li>
            <li className={classes.listItem}>About</li>
            <li className={classes.listItem}>Build page</li>
          </ul>
        </div>
        <div className={classes.item}>
          <h4 className={classes.title}>Follow US</h4>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <a href="https://www.instagram.com/binary_studio_academy">Instagram</a>
            </li>
            <li className={classes.listItem}>
              <a href="https://www.facebook.com/BinaryStudioAcademy">Facebook</a>
            </li>
          </ul>
        </div>
        <div className={classes.item}>
          <h4 className={classes.title}>Legal</h4>
          <ul className={classes.list}>
            <li className={classes.listItem}>Terms</li>
            <li className={classes.listItem}>Policy</li>
          </ul>
        </div>
      </div>
    </div>
    <div className={classes.copyRights}>
      <p className={classes.list}>&copy; 2020 PCForce. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
