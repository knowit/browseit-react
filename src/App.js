import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Links } from "./components/LinkSection";
import { Footer } from "./components/MainFooter";
import { Nooblist } from "./components/Nooblist";
import * as jsonRequest from "./json";
import { CompanySelector } from "./components/CompanySelector";
import { FloorMap } from "./components/FloorMap";

const jsonFiles = Object.entries(jsonRequest).map(j => j[1]);

// some console stuff for devs...
//#region
const bigPink =
  "color: hotpink; font-size:20pt; font-weight: bold; line-height: 40px;";
const smallBlack = "font-size:10pt;";
const smallPinkLink = "color: hotpink; font-size: 10pt; font-weight: bold;";
console.log("%cHello Cutie.", bigPink);
console.log(
  "%cHvis du har funnet veien hit så vil du være med i 🕸 Web Chapter.",
  smallBlack
);
console.log(
  "%cSend en søt epost til en av lederne da vel. Du finner oss i medlemslisten.",
  smallBlack
);
console.log(
  "%cFinn oss da ❤️ %chttps://projects.knowit.no/display/FAG/Web+Chapter",
  smallBlack,
  smallPinkLink
);
console.log("");
//#endregion

function App() {
  let defaultSelected = localStorage.getItem("selectedCompany");

  const [selectedJson, setSelectedJson] = useState(
    defaultSelected ? jsonFiles.filter(j => j.id === defaultSelected)[0] : {}
  );
  const [totalBoxCount, setTotalBoxCount] = useState(0);
  const [checkedBoxesCount, setCheckedBoxesCount] = useState(0);
  const [showMap, setShowMap] = useState(false);

  // setSelectedJson(jsonFiles.filter(j => j.id === defaultSelected)[0]);

  const style = {
    placeholderText: {
      display: "flex",
      justifyContent: "center",
      paddingTop: "2em",
      fontSize: "3em",
      color: "lightgray"
    }
  };
  return (
    <main>
      <header>
        <Header showMap={showMap} setShowMap={setShowMap} />
        <CompanySelector
          jsonFiles={jsonFiles}
          selectedJson={selectedJson}
          setSelectedJson={setSelectedJson}
          totalBoxCount={totalBoxCount}
          setTotalBoxCount={setTotalBoxCount}
          checkedBoxesCount={checkedBoxesCount}
          setCheckedBoxesCount={setCheckedBoxesCount}
        />
      </header>
      <span>
        <h2>{selectedJson.id}</h2>
      </span>
      {showMap && <FloorMap setShowMap={setShowMap} showMap={showMap} />}

      <div className="App">
        {selectedJson.id ? (
          <div>
            <Links link_sections={selectedJson.link_sections} />
            <Nooblist
              checkbox_sections={selectedJson.checkbox_sections}
              checkedBoxesCount={checkedBoxesCount}
              setCheckedBoxesCount={setCheckedBoxesCount}
            />
          </div>
        ) : (
          !showMap && (
            <span style={style.placeholderText}>
              Select your Knowit company ⭜
            </span>
          )
        )}
      </div>
      <Footer
        totalBoxCount={totalBoxCount}
        checkedBoxesCount={checkedBoxesCount}
        selectedJson={selectedJson}
        setCheckedBoxesCount={setCheckedBoxesCount}
      />
    </main>
  );
}

export default App;
