import React from 'react';
import { Link } from 'react-router-dom';

import classes from './styles.module.scss';

const Footer = (): JSX.Element => (
  <div className={classes.footer}>
    <div className={classes.wrapper}>
      <div className={classes.item}>
        <h2 className={classes.footerTitle}>PCForge</h2>
        <span className={classes.listItem}>Build your awesome PC with us!</span>
      </div>
      <div className={classes.listWrapper}>
        <div className={classes.item}>
          <h4 className={classes.title}>Explore</h4>
          <ul className={classes.list}>
            <Link to="/" className={classes.listItem}>
              Home
            </Link>
            <Link to="/builder" className={classes.listItem}>
              Build page
            </Link>
            <Link to="/matcher" className={classes.listItem}>
              Game Matcher
            </Link>
            <Link to="/hardwares" className={classes.listItem}>
              Hardware
            </Link>
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
      </div>
    </div>
    <div className={classes.copyRights}>
      <p className={classes.list}>&copy; 2020 PCForge. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
