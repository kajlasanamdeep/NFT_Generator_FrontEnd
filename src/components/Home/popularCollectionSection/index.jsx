import React from "react";
import style from "./PopularCollection.module.css";
import { AiFillHeart } from "react-icons/ai";
import Placeholder from '../../../assets/images/placeholder.png';
import MaskGroup from '../../../assets/images/Mask Group.png';

const POPULAR_COLLECTION = [
  {
      id: 1,
      image: Placeholder,
      title: `Cute things`,
      text: `Created by Sera Cobalt`,
      like: `120`,

  },
  {
      id: 2,
      image: MaskGroup,
      title: `Abstract Attractive`,
      text: `Created by Thomas Cox`,
      like: `150`,

  },
];

const PopularCollections = () => {
  return (
    <div>
      <div className={style.PopularCollection}>
        <div className={`container pt-5 pb-5 ${style.container}`} >
          <div className={`row  ${style.upperHeading}`}>
            <div className={`col-md-6 col-sm-6 col-xs-6 ${style.columnHeading}`}>
              <h1 className={style.heading}>
                Popular Collections
              </h1>
              <p className={style.text}>
                Here the popular Collections
              </p>
            </div>
            <div className={`col-md-6 col-sm-6 col-xs-6  ${style.columnHeading}`}>
              <h4 className={style.headingExplore}>
                Explore More
              </h4>
            </div>
          </div>

          <div className="row">
            {POPULAR_COLLECTION.map((item) => (
              <div key={item.id} className={`col-md-6 col-sm-12  ${style.Content}`}>
                <img alt="popularImage" className={style.popularCollectionImage} src={item.image} />
                <div className={style.likeContainer}>
                  <AiFillHeart />
                  <span>150</span>
                </div>
                <div className={style.emptyContainer}></div>
                <div className={style.cardHeading}>
                  <h3 className={style.title}>{item.title}</h3>
                  <h5 className={style.Columntext}>{item.text}</h5>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularCollections