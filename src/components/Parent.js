import { useState } from "react"
import Child from "./Child"

const Parent = () => {
    let[showModal, setShowModal] = useState(false)

 return(
    <div className="parent">
        <h1>Parent Component</h1>
        <Child setShowModal={setShowModal}/>
    </div>
 )   
}

export default Parent