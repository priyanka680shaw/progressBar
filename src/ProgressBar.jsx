
import { useEffect, useState } from 'react'
import './progressBar.css'
function ProgressBar(){

const [progress ,setProgress] = useState(0);
useEffect(()=>{
    let intervalId ;
    intervalId = setInterval(()=> {
        console.log(intervalId)
        setProgress((previous)=>{
            if((previous+1) == 100){
                clearInterval(intervalId)
            }
            return previous+1;
        } )
    } , 100)
    return(()=>{
        clearInterval(intervalId);
    })
} , [])

   const progresspercentage = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color : "white",
    position : "Relative",
    bottom : "50px"
    
   }
  

    return(
        <>
            <section>
                <div className="mainContainer">
                    <div className="BarContainer">
                            <h1>Progress Bar</h1>
                            <div className="bar">
                                <div style={{width :`${progress}%`, backgroundColor : "green" , height : "50px" , borderRadius : "50px"}}>
                                </div>
                                    <p style={progresspercentage}>{progress}%</p>
                                
                            </div>
                            <p>Loading....</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ProgressBar