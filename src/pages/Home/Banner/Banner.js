import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <section>
      <div className="bannerContainer">
        <div className="bannerImg">
          <div className="bannerContent">
            <p>
              <FontAwesomeIcon className="tagIcon" icon={faTag} /> History
            </p>
            <h2>
              Heimdall, guard and <br /> keeper of the <br /> Ragnarök
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
