import React, { Component } from "react";
import SavedData from "../data/savedProperties.json";
import Card from "./card";

class SavedList extends Component {
  render() {
    return (
      <div>
        {SavedData.map((PropertyDetail, index) => {
          return (
            <Card
              key={PropertyDetail.id}
              logoBgColor={PropertyDetail.agency.brandingColors.primary}
              mainImage={PropertyDetail.mainImage}
              logo={PropertyDetail.agency.logo}
              price={PropertyDetail.price}
            />
          );
        })}
      </div>
    );
  }
}

export default SavedList;
