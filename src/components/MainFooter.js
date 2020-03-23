import React from "react";
import "../App.css";
import expand from "../img/expand.png";

export function Footer(props) {
  const total = props.totalBoxCount;
  const checked = props.checkedBoxesCount;

  return (
    <footer>
      <div id="expand">
        <a id="expandLink" href="index.html">
          <img id="expandMe" src={expand} alt="" />
        </a>
        <span id="alwaysExpand">
          <input
            data-nope="noCount"
            id="expandInput"
            name="expandInput"
            type="checkbox"
          />
          <label htmlFor="expandInput">Alltid stort vindu</label>
        </span>
      </div>
      <div id="feedback">
        Kildekode:{" "}
        <a href="https://github.com/knowit/browseit">
          github.com/knowit/browseit
        </a>
        – Versjon <span className="version">3.0</span>.
        <br />
        Send gjerne forslag til
        <a href="mailto:michael.johansen@knowit.no">
          {" "}
          michael.johansen@knowit.no
        </a>
      </div>
      {total === 0 ? (
        <div id="counter"></div>
      ) : (
        <div id="counter">
          {checked}/{total}
        </div>
      )}
    </footer>
  );
}
