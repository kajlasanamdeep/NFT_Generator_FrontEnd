import React from 'react'
import style from './HeroArea.module.css';
import ExploreIcon from "@mui/icons-material/Explore";
import Image from '../../../assets/images/Group4.png';
function HeroArea() {
    return (
        <section className={`${style.section}`}>
            <div className='container'>
                <div className={`row`}>
                    <div className='col-lg-6'>
                        <div className={`${style.container}`}>
                            <h5 className={` ${style.heading} mt-5`}>A New Way to Create your
                                <span className={style.title}> Artworks.</span>
                            </h5>
                            <h6 className={`${style.text}`}>
                                Find the most attractive and rarest NFTs to be your Collection
                            </h6>
                            <button className={`btn rounded btn-primary ${style.button}`}>
                                <ExploreIcon />  Explore
                            </button>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                            <img className={`${style.image}`} src={Image} alt=''></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroArea