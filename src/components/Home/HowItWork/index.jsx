import React from 'react'
import style from './HowItWork.module.css';
import CRT from "../../../assets/images/icon.png";
import NFT from "../../../assets/images/icon2.png";

function HowItWorkSection() {
    return (
        <section className={`${style.section}`}>
            <div className="container">
                <h1 className={`${style.heading}`}>How it work</h1>
                <div className="row">
                    <div className="col-lg-6">
                        <div className={`${style.contentdiv}`}>
                            <img src={CRT} alt="" />
                            <div className={`${style.contents}`}>
                                <p>Create Your NFTs</p>
                                <p>Create different NFTs with our NFT Generator</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={`${style.contentdiv}`}>
                            <img src={NFT} alt=""/>
                            <div className={`${style.contents}`}>
                                <p>Publish NFT for Miniting</p>
                                <p>If you are a creator/designer.you can add your NFTs to the display </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorkSection