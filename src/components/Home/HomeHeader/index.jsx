import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Logo from '../../../assets/images/Logo.png';
import { openModal, openLogin, openSignup } from '../../../redux/slices/modalSlice';
export default function HomeHeader() {
  const dispatch = useDispatch();
  const loginHandler = ()=>{
    dispatch(openModal());
    dispatch(openLogin());
  }
  const signupHandler = ()=>{
    dispatch(openModal());
    dispatch(openSignup());
  }

  return (
    <div className={style.navbar}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className={`navbar-brand ${style.logo}`} to="/">
            <img alt="logo" className={`${style.logoImage}`} src={Logo} width="39px" height="38px" />
            <p className={`${style.logoText}`}>NFT Generator</p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className={`navbar-nav  ml-auto ${style.ul}`}
            >
              <li className={`nav-item`}>
                <Link
                  className={`nav-link ${style.link}`}
                  to=''
                >
                  Home
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link ${style.link}`} to="">
                  Community
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link ${style.link}`} to=''>
                  Contact us
                </Link>
              </li>
              <li className={`${style.line} nav-item`}></li>
              <li className={`nav-item`}>
                <Link className={`nav-link ${style.link}`} onClick={loginHandler} to="">
                  Login
                </Link>
              </li>
              <li className={`nav-item ${style.link}`}>
                <Link className={`nav-link ${style.signup}`} onClick={signupHandler}>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
};