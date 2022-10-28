import React from "react";
import style from "./EncourageCitizen.module.css";
import Mask from "../../../assets/images/Mask.png";
import mask from "../../../assets/images/Mask2.png";
const EncourageCitizen = () => {
  return (
      <section className={`${style.EncourageSection}`}>
        <div className="container">
          <div className={`row ${style.privaterow}`}>
            <div className="col-lg-6 col-md-12">
              <div className="d-flex">
                <img className={`${style.image11}`} src={mask} alt=''></img>
                <img className={`${style.image22}`} src={Mask} alt=''></img>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className={`${style.rightDiv}`}>
                <p>Encourage citizen developers</p>
                <p>
                  No-code app development empowers non-technical people to
                  assume the role of citizen developers. as business users. they
                  have the best understanding of the problem. Hence they can
                  come up with the best solution. the only barrier that remains
                  between them and the solutin is technical skills.
                </p>
                <p>
                  No-code app development empowers non-technical people to
                  assume the role of citizen developers. as business users. 
                </p>
                <button className={`${style.button} btn btn-primary rounded`}>Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default EncourageCitizen;
