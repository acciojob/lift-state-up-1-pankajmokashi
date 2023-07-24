import React, { useState } from "react"
const Child = ({changeState}) => {

   let [state, setState] = useState(false)
    return(
      
       <div className="child">
            <h2>Child Component</h2>
            <button onClick={() => {
               changeState(true)
               setState(true)
            }}>Show Modal</button>  
            {
                state &&
                <div>
                    <h3>Modal Content</h3>
                    <div>This is the modal content.</div>
                </div> 
            }
       </div>
    )   
   }
   
   export default Child
