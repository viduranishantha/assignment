import React, { Component } from "react";

class Card extends Component {
  renderButtons() {
    // console.log(this.props.listType === savedList);

    if (this.props.listType === "savedList")
      return (
        <button onClick={() => this.props.delEvent(this.props.propertyId)}>
          Remove Property
        </button>
      );
    return (
      <button onClick={() => this.props.addEvent(this.props.propertyId)}>
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
        <div className="overlay"></div>
        <div className="logo" style={{ backgroundColor: logoBgColor }}>
          {this.renderButtons()}

          <img src={logo} width="80px" height="30px" alt="property" />
          <div>{propertyId} </div>
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
