import React from "react";
import "../App.css";
import mapMarkedSolid from "../img/map-marked-alt-solid.svg";
import webChapter from "../img/web-chapter-logo.png";
import fiftFloor from "../img/sundt-etasje-5.png";

export function Header(props) {
  return (
    <div>
      <div id="leftheader">
        <a
          id="title"
          href="https://bit.ly/welcome-to-knowit"
          title="See in Chrome WebStore"
        >
          BrowseIt
        </a>
      </div>

      <img id="mapmarker" src={mapMarkedSolid} width="40" alt="" />
      <a href="https://projects.knowit.no/display/FAG/Web+Chapter">
        <img id="twc" src={webChapter} alt="" />
      </a>

      <div id="map">
        <img src={fiftFloor} title="click to close" alt="" />
      </div>
    </div>
  );
}
