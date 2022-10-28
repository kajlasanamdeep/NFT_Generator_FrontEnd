import React from 'react'
import style from "./Footer.module.css";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/Logo.png';

export default function HomeFooter (){
    return (
        <footer className={`${style.footer}`}>
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h5 className="text-uppercase fw-bold mb-4">
                            <img alt='logoImage' className={`${style.logo} me-3 text-secondary`} width="39px" height="38px" src={Logo} />NFT generator
                        </h5>
                        <p className={`${style.text}`}>
                            Lorem ipsum dolor sit amet, consectetur
                        </p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h5 className="text-uppercase fw-bold mb-4">
                            About Us
                        </h5>
                        <p className={`${style.text}`}>
                            <Link to="" className="text-reset text-decoration-none">About</Link>
                        </p>
                        <p className={`${style.text}`}>
                            <Link to="" className="text-reset text-decoration-none">Contact</Link>
                        </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h5 className="text-uppercase fw-bold mb-4">
                            Links
                        </h5>
                        <p className={`${style.text}`}>
                            <Link to="" className="text-reset text-decoration-none">Blog</Link>
                        </p>
                        <p className={`${style.text}`}>
                            <Link to="" className="text-reset text-decoration-none">Help Center</Link>
                        </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h5 className="text-uppercase fw-bold mb-4">Social Media</h5>
                        <div className='d-flex justify-content-center p-4'>
                            <a href="/" className="me-4 link-secondary">
                                <BsInstagram className={`${style.icon}`}/>
                            </a>
                            <a href="/" className="me-4 link-secondary">
                                <BsTwitter className={`${style.icon}`}/>
                            </a>
                            <a href="/" className="me-4 link-secondary">
                                <BsFacebook className={`${style.icon}`}/>
                            </a>
                            <a href="/" className="me-4 link-secondary">
                                <TbBrandTelegram className={`${style.icon}`}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.bottom} text-center p-4`}>
                <a className="text-reset text-decoration-none" href="/">Copyright © 2022 NFT Generator. All Right Reseved</a>
            </div>
        </footer>
    );
};