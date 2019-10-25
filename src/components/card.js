import React, { Component } from "react";

class Card extends Component {
  renderButtons() {
    if (this.props.listType === "savedList")
      return (
        <button
          className="btnRemove"
          onClick={() => this.props.delEvent(this.props.propertyId)}
        >
          Remove Property
        </button>
      );
    return (
      <button
        className="btnAdd"
        onClick={() => this.props.addEvent(this.props.propertyId)}
      >
        Add Property
      </button>
    );
  }

  render() {
    const {
      logoBgColor,
      propertyId,
      logo,
      mainImage,
      price,
      delEvent,
      addEvent,
      listType
    } = this.props;
    return (
      <div className="card">
        <div className="overlay">
          <div className="buttonContainer">
            <div className="buttonMiddle">{this.renderButtons()}</div>
          </div>
        </div>
        <div className="logo" style={{ backgroundColor: logoBgColor }}>
          <img src={logo} alt="property" />
        </div>
        <div className="main-image">
          <img src={mainImage} alt="property" />
        </div>
        <div className="price">{price}</div>
      </div>
    );
  }
}

export default Card;
