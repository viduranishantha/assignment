import React, { Component } from "react";
import ResultData from "../data/result.json";
import SavedData from "../data/savedProperties.json";
import Card from "./card";

class ResultList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ResultData,
      SavedData
    };
    // console.log(this.state);
  }

  // componentDidMount() {
  //   const prpertyArray;
  //   const data = ResultData;
  //   // this.setState({ house: data.results[0], loading: false });
  //   console.log(data);
  //   this.setState((prpertyArray = data));
  // }

  DelProperty = (index, e) => {
    // const newItem = SavedtData;
    // console.log(this);
    // const savedProperty = Object.assign([], this.state.SavedtData);
    // savedProperty.splice(index, 1);
    const property = Object.assign([], this.state.ResultData);
    property.splice(index, 1);
    this.setState({ ResultData: property });
    // const saved = Object.assign([], this.state.SavedtData);
    // property.splice(index, 1);
    // this.setState({ ResultData: property });
  };

  AddProperty = propertyId => {
    const property = Object.assign([], this.state.SavedData);
    property: property.concat(ResultData);
    console.log(property);

    this.setState({ SavedData: property });

    // const property = Object.assign([], this.state.ResultData);
    // const index = this.state.ResultData.findIndex(property => {
    //   return property.id === propertyId;
    // });
    // const activeProperty = this.state.ResultData[propertyId];
    // const resultArray = [...this.state.SavedData];
    // this.setState({New});
    // console.log(activeProperty.push(...resultArray));
  };

  render() {
    return (
      <div>
        {this.state.ResultData.map((PropertyItem, index) => {
          return (
            <Card
              key={PropertyItem.id}
              propertyId={PropertyItem.id}
              logoBgColor={PropertyItem.agency.brandingColors.primary}
              mainImage={PropertyItem.mainImage}
              logo={PropertyItem.agency.logo}
              price={PropertyItem.price}
              addEvent={this.AddProperty}
              delEvent={this.DelProperty.bind(this, index)}
            />
          );
        })}
      </div>
    );
  }
}

export default ResultList;
