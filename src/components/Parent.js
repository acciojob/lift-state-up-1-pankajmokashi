import React, { useState } from "react"
import Child from "./Child"

const Parent = () => {
    let[showModal, setShowModal] = useState(false)

 return(
    <div className="Parent">
        <h1>Parent Component</h1>
        <Child changeState={setShowModal}/>
        
    </div>
 )   
}

export default Parent
