import React, { useState } from "react"
import Child from "./Child"

const Parent = () => {
    let[showModal, setShowModal] = useState(false)

 return(
    <div className="child">
        <Child changeState={setShowModal}/>
        {
                showModal &&
                <div>
                    <h3>Modal Content</h3>
                    <div>This is the modal content.</div>
                </div> 
            }
    </div>
 )   
}

export default Parent
