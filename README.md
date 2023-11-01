some important concept......
passed the data.jsx array question to useState so i can see all the changes....
 export default function App() {
  const [data, setData] = useState(question);

  return (
   <>
     {
       data.map((CurrE)=>{
         return <Accordion key={CurrE.title} {...CurrE}/>
       })
     }
     </>
  );
}
.....
....this is array destructuring method....
import React from "react"
const Accordion= ({title, content})=>{
  return (
    <>
      <h1>{content}</h1>
      <h1>{title}</h1>
    </>
  )
}
export default Accordion;
....
data.map((CurrE)=>{
 return <Accordion key={CurrE.title} {...CurrE}/> map method name is data.....stored the currE of array in data.....also data is use state which show currE