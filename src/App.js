import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Links } from "./components/LinkSection";
import { Footer } from "./components/MainFooter";
import { Nooblist } from "./components/Nooblist";
import * as Linkdata from "./json/objectnet.json";


function App() {
  return (
    <body>
      <main>
        <header>
          <Header></Header>
        </header>
        <div className="App">
          <Links link_sections= {Linkdata.link_sections}></Links>
          <Nooblist checkbox_sections = {Linkdata.checkbox_sections}></Nooblist>
        </div>
        <Footer></Footer>
      </main>
    </body>
  );
}

export default App;
