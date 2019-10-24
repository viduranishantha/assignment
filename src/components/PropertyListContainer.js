import React, { Component } from "react";
import PropertyData from "../data/data.json";
import Card from "./card";

class PropertyListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: PropertyData.results,
      saved: PropertyData.saved
    };
    // console.log(this.state);
  }

  //   AddProperty = propertyId => {};
  AddProperty = (index, e) => {
    const activeIndex = index - 1;
    const activeProperty = [this.state.results[activeIndex]];
    const saved = this.state.saved;
    const mergeList = [...saved, ...activeProperty];
    this.setState({ saved: mergeList });
    const results = Object.assign([], this.state.results);
    results.splice(activeIndex, 1);
    this.setState({ results: results });
    console.log(activeIndex);
  };

  DelProperty = (index, pid) => {
    console.log(index);
  };

  render() {
    return (
      <div className="main-container">
        <h1> REA Assignment </h1>
        <div className="list-container">
          <div className="result-container">
            <h2> Result </h2>
            {this.state.results.map((Property, index) => {
              return (
                <Card
                  key={Property.id}
                  listType="resultResult"
                  propertyId={Property.id}
                  logoBgColor={Property.agency.brandingColors.primary}
                  mainImage={Property.mainImage}
                  logo={Property.agency.logo}
                  price={Property.price}
                  addEvent={this.AddProperty.bind(index, Property.id)}
                />
              );
            })}
          </div>
          <div className="saved-container">
            <h2> Saved Properties </h2>
            {this.state.saved.map((Property, index) => {
              return (
                <Card
                  key={Property.id}
                  listType="savedList"
                  propertyId={Property.id}
                  logoBgColor={Property.agency.brandingColors.primary}
                  mainImage={Property.mainImage}
                  logo={Property.agency.logo}
                  price={Property.price}
                  delEvent={this.DelProperty.bind(this, Property.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default PropertyListContainer;
