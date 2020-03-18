import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Links } from "./components/LinkSection";
import { Footer } from "./components/MainFooter";
import { Nooblist } from "./components/Nooblist";
import expand from "./img/expand.png";

function App() {
  return (
    <body>
      <main>
        <header>
          <Header></Header>
        </header>
        <div className="App">
          <Links></Links>
          <Nooblist></Nooblist>
        </div>
        <Footer></Footer>
      </main>
    </body>
  );
}

export default App;
