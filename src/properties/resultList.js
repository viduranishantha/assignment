import React, { Component } from "react";
import ResultData from "../data/result.json";

class ResultList extends Component {
  render() {
    return (
      <div>
        {ResultData.map((PropertyDetail, index) => {
          return (
            <div className="card">
              <div className="logo">
                <img
                  src={PropertyDetail.agency.brandingColors.primary}
                  width="80px"
                  height="30px"
                  alt="property"
                />
              </div>
              <div className="main-image">
                <img src={PropertyDetail.mainImage} alt="property" />
              </div>
              <div className="price">{PropertyDetail.price}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ResultList;
