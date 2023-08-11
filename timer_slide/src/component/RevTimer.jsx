
import React from "react"
export default function RevTimer(){
   

 const [minut,setMin]=React.useState(0)
const [second,setSec]=React.useState(0)
const [int,setInput]=React.useState("")
function setHandale(e){
  //const handalChange =(e)=>{
    setMin(e.target.value)
 // }
  setInput("")
}
React.useEffect(()=>{
  const Interval=setInterval(()=>{
    if(second===59){
      setMin(minut+1)
      setSec(0)
      
    }
    else if(second<=59){
      setSec(second+1)
    }
  },1000)
  return ()=> clearInterval(Interval);
},[second,minut])
  return (
    <div  style={{border:"3px solid black", backgroundColor:"darkcyan", width:"40%", margin:"auto",color:"white",padding:"1rem"}}>
        <h1 style={{color:"black"}}>Reverse Timer</h1>
        <div>
      <label><b>Minut : </b></label>
        <input type="number" placeholder="set minuts" value={int} />
        <button onClick={setHandale}>Start</button>
      </div>
        <div style={{display:"flex", margin:"auto",justifyContent:"space-between", width:"70%"}}>
        <h1>Minutes :{minut}</h1>
        <h1>Seconds :{second}</h1>
        </div>
    </div>
  )
}
//timer