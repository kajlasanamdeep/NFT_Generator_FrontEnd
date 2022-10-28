import React from 'react'
import style from './Collections.module.css';
export default function Collections() {
    return (
        <div className={`${style.Column}`}>
            <input className={`${style.searchRow}`} type='search' placeholder='Search'>
            </input>
            <p className={`${style.collectionsRowTitle}`}>
                Collections
            </p>
            <div className={`${style.collectionsGrid}`}>
                <div className={`${style.box}`}></div>
                <div className={`${style.box}`}></div>
                <div className={`${style.box}`}></div>
                <div className={`${style.box}`}></div>
                <div className={`${style.box}`}></div>
                <div className={`${style.box}`}></div>
                <div className={`${style.box}`}></div>
                <div className={`${style.box}`}></div>
                <div className={`${style.box}`}></div>
                <div className={`${style.box}`}></div>
            </div>
        </div>
    )
}
