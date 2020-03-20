import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Links } from "./components/LinkSection";
import { Footer } from "./components/MainFooter";
import { Nooblist } from "./components/Nooblist";
import * as jsonRequest from "./json";
import { CompanySelector } from "./components/CompanySelector";

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
  const [selectedJson, setSelectedJson] = useState({}); 

  const style = {
    placeholderText: {
      display: "flex",
      justifyContent: "center",
      paddingTop:"2em",
      fontSize:"3em",
      color:"lightgray"
    }
  }
  return (
    <main>
      <header>
        <Header/>
      </header>
      <div className="App">
        <CompanySelector
          jsonFiles={jsonFiles}
          selectedJson={selectedJson}
          setSelectedJson={setSelectedJson}
        />
        {selectedJson.id ? (
          <div>
            <h2>{selectedJson.id}</h2>
            <Links link_sections={selectedJson.link_sections}/>
            <Nooblist checkbox_sections={selectedJson.checkbox_sections}/>
          </div>
        ) : (
          <span style={style.placeholderText}>Select your Knowit company ⭜</span>
        )}
      </div>
      <Footer/>
    </main>
  );
}

export default App;
