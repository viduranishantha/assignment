import React from "react";

function RenderButtons(listTyp) {
  if (listTyp.listTyp === "resultList")
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
export default RenderButtons;
