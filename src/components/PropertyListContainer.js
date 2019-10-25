import React, { Component } from "react";
import PropertyData from "../data/data.json";
import Card from "./card";
import Logo from "../logo.jpg";

class PropertyListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: PropertyData.results,
      saved: PropertyData.saved
    };
  }

  AddProperty = (index, e) => {
    const activeIndex = index;
    const activeProperty = [this.state.results[activeIndex]];
    const saved = this.state.saved;
    const mergeList = [...saved, ...activeProperty];
    this.setState({ saved: mergeList });
    const results = Object.assign([], this.state.results);
    results.splice(activeIndex, 1);
    this.setState({ results: results });
  };

  DelProperty = (index, p) => {
    console.log(index);
    const activeProperty = [this.state.saved[index]];
    const results = this.state.results;
    const mergeList = [...results, ...activeProperty];
    this.setState({ results: mergeList });
    const saved = Object.assign([], this.state.saved);
    saved.splice(index, 1);
    this.setState({ saved: saved });
  };

  render() {
    return (
      <div className="main-container">
        <div className="logoContainer">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="list-container">
          <div className="result-container">
            <h2> Result </h2>
            {this.state.results.map((Property, index) => {
              return (
                <Card
                  key={Property.id}
                  listType="resultList"
                  propertyId={Property.id}
                  logoBgColor={Property.agency.brandingColors.primary}
                  mainImage={Property.mainImage}
                  logo={Property.agency.logo}
                  price={Property.price}
                  addEvent={this.AddProperty.bind(this, index)}
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
                  delEvent={this.DelProperty.bind(this, index)}
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
