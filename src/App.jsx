import React, { useState } from "react";
import './App.css';
import { reactQA } from './Data';
import Accordion from "./Accordion"

export default function App() {
  const [data, setData] = useState(reactQA);

  return (
   <>
     <div className="section">
       <div className="section2">
        <h1>React Interview And Question</h1>
     {
       data.map((CurrE)=>{
         return <Accordion key={CurrE.id} {...CurrE}/>
       })
     }
         </div>
     </div>
     </>
  );
}
