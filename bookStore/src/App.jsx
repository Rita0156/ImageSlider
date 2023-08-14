import React from "react"
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";
import "./fiction.json"
function App() {
  const [tit,setTit]=React.useState(true)
  
   const [status,setStatus]=React.useState("Show Non-Fictional Boooks")

   const compo=(tit==true)?<Fiction/>:<NonFiction/>
   function setTogal(){
    //setStatus((!status)?"Show Fictional Boooks":"Show Non Fictional Boooks")
    //let val="Fictional Books"
      if(tit===true){

        //setTit("Non Fiction Books")
        setStatus("Show Fictional Boooks")
        setTit(false)
        //return (<NonFiction/>)
      }
      else{
        //setTit("Fiction Books")
        //return (<Fiction/>)
        setStatus("Show Non-Fiction Boooks")
        setTit(true)
      }
   }
   
   
  return (
    <div style={{margin:"auto", textAlign:"center"}}>
      <h1>Mini Book Store</h1>

      <button style={{backgroundColor:"black",color:"white",fontWeight:"bold", fontSize:"20px", padding:"7px", border:"none",borderRadius:"6px"}} onClick={setTogal}   data-testid="toggle-btn">{status}</button>
        
      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition... */}
        {compo}
          
      </div>
      
    </div>
  );
}

export default App;
