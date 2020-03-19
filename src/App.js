import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Links } from "./components/LinkSection";
import { Footer } from "./components/MainFooter";
import { Nooblist } from "./components/Nooblist";
import * as Linkdata from "./json/objectnet.json";

const bigPink = 'color: hotpink; font-size:20pt; font-weight: bold; line-height: 40px;';
const smallBlack = 'font-size:10pt;';
const smallPinkLink = 'color: hotpink; font-size: 10pt; font-weight: bold;';
console.log('%cHello Cutie.', bigPink);
console.log('%cHvis du har funnet veien hit så vil du være med i 🕸 Web Chapter.', smallBlack);
console.log('%cSend en søt epost til en av lederne da vel. Du finner oss i medlemslisten.', smallBlack);
console.log('%cFinn oss da ❤️ %chttps://projects.knowit.no/display/FAG/Web+Chapter', smallBlack, smallPinkLink);
console.log('');
function App() {
  return (
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
  );
}

export default App;
