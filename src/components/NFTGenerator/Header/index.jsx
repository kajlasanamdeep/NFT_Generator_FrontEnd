import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/Logo.png';

export default function Header() {
  return (
    <React.Fragment>
      <div className={`${style.navbar} row`}>
        <Link className={`nav-link ${style.logo} col`} to="/">
          <img alt="logo" src={Logo} height={38.51} width={39.78} />
        </Link>
        <Link className={`nav-link ${style.link} col`}>
          Home
        </Link>
        <Link className={`${style.link} nav-link col`} to="">
          My Projects
        </Link>
        <Link className={`${style.brand} nav-link col col-sm-5`} to='/'>
          NFT Generator
        </Link>
        <div className={`${style.profile} col`}>
          admin@gmail.com
        </div>
      </div>
    </React.Fragment>
  )

};