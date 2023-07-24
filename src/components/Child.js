import React from "react"
const Child = ({changeState}) => {

    return(
       <div>
            <h2>Child Component</h2>
            <button onClick={() => changeState(true)}>Show Modal</button>  
       </div>
    )   
   }
   
   export default Child
