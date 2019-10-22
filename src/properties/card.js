import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="overlay"></div>
        <div
          className="logo"
          style={{ backgroundColor: this.props.logoBgColor }}
        >
          <button
            onClick={
              (this.props.delEvent,
              () => this.props.addEvent(this.props.propertyId))
            }
          >
            Add Property
          </button>
          <img
            src={this.props.logo}
            width="80px"
            height="30px"
            alt="property"
          />
        </div>
        <div className="main-image">
          <img src={this.props.mainImage} alt="property" />
        </div>
        <div className="price">{this.props.price}</div>
      </div>
    );
  }
}

export default Card;
