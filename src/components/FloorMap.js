import React from "react";
import fiftFloor from "../img/sundt-etasje-5.png";

export function FloorMap(props) {
  let visible = props.showMap;
  const style = {
    map: {
      width: "100%",
      cursor: "pointer"
    }
  };
  return (
    <div>
      <img
        src={fiftFloor}
        style={style.map}
        title="click to close"
        alt=""
        onClick={() => props.setShowMap(!visible)}
      />
    </div>
  );
}
