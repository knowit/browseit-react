import React from 'react';
import '../App.css'
import expand from '../img/expand.png'

export function Footer() {
    return (
        <footer>
        <div id="expand">
          <a id="expandLink" href="popup.html"><img id="expandMe" src={expand} /></a>
          <span id="alwaysExpand"><input data-nope="noCount" id="expandInput" name="expandInput" type="checkbox" /><label for="expandInput">Alltid stort vindu</label></span>
        </div>
        <div id="feedback">
          Kildekode: <a href="https://github.com/knowit/browseit">github.com/knowit/browseit</a>
          {/* <!--<span class="bold">Ctrl + Shift + B</span> åpner BrowseIt.--> */}
          – Versjon <span class="version">?.?.?</span>.
          <br />
          Send gjerne forslag til
          <a href="mailto:michael.johansen@knowit.no">michael.johansen@knowit.no</a>
        </div>
        <div id="counter">?</div>
      </footer>
    )
} 