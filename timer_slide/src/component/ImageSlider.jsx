

import React, {useEffect,useState} from "react"
//import HeroSlider, {Slide} from "hero-slider";
export default function ImageSlider(avtar){
  const data=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrSoEJPX7E28CNGxcP6awHQIv_ykPDlEDOi53fJW_0TiwNaTCJn-dolNRh9SSB_dp1n5c&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8Us_B_jVXts2AGuAMm_OtGPMAE-z7P_n3A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Oyk8W_zsumqmsnTAJV1KztpU3SAjTLImew&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtEzLeC7bsFQZEb81FkFJNM7h4Y9xf29hEw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_ktlomd_uxyeCJY246-c3EHU2qyDvvnakQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQteZ7GLAbnjKlm1mUgZBBQ2-r7rCdIK_Cgqg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA87wUpVtZM4Epfxdgc7J_dL6KIBLfClDz2g&usqp=CAU"
  ]
  const [images,setImg]=useState(data)
  const [index,setIndex]=useState(0)
  //let i=0;
  //working proper
  useEffect(()=>{
    
      const InterVal= setTimeout(() => {
           if(index==data.length){
            //i=0
            setIndex(0)
            setImg(data[index])
            
            
           }
           else if(index>=0){
            setIndex(index+1)
           setImg(data[index])
           }
       }, 1000);
       return ()=>clearInterval(InterVal)
  },[index,images])

    return (
       <div style={{width:"60%",margin:"auto",border:"5px solid black",backgroundColor:"lightcyan",padding:"2rem", marginTop:"100px", marginBottom:"50px"}}>
             <h1 style={{color:"white",backgroundColor:"darkcyan",border:"2px solid black"}}>Image Slider</h1>
             <img style={{border:"4px solid black",width:"300px",height:"250px"}}  src={images}/>
       
       </div>
    )
}