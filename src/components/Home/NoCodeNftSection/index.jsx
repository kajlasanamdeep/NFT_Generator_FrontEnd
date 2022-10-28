import React from 'react'
import Image from '../../../assets/images/monkey.png';
import style from './NoCodeNft.module.css';
function NoCodeNftSection() {
    return (
        <section className={`${style.section}`}>
            <div className='container'>
                <div className={`row ${style.background}`}>
                    <div className={`${style.leftColumn} col-md-12 col-lg-6 `}>
                        <div className={`${style.line}`}></div>
                        <img alt="" className={style.Image}
                            width={400}
                            height={454}
                            src={Image}
                        />
                        <div className={`${style.content}`}>
                            <div className={style.emptyContainer}></div>
                            <h5 className={style.text1}>Bored Ape</h5>
                            <h5 className={style.text2}>0.088 ETH</h5>
                        </div>
                    </div>
                    <div className={`${style.rightColumn} col-md-12 col-lg-6`}>
                        <h1>The most flexible no-code NFT Generator</h1>
                        <p className={style.paragraph}>
                            Forget about the unbearably long waiting times and the
                            unaffordable quotes you received for softwar development. try
                            Appy Pie for easy quick. and affordable no-code solutions.
                        </p>
                        <p className={style.paragraph}>
                            Super east to use. Our no-code development platform's drag and
                            drop functionality lets you unify and simplify all your data
                            into a single source. Appy Pie breaks all barriers and
                            boundaries when it comes to no-code development. offering you
                            seamless integrations with other data sources. even
                            applications.
                        </p>
                        <button type="button" className={style.button}>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NoCodeNftSection