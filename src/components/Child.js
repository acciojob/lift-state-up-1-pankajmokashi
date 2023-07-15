import { useState } from "react"

const Child = (setShowModal) => {

    let [content, setContent] = useState(false)

    function updateState(){
        setShowModal(true)
        setContent(true)
    }

    return(
       <div>
            <h2>Child Component</h2>
            <button onClick={updateState}>Show Modal</button>
            {
                content &&
                <div>
                    <h3>Modal Content</h3>
                    <div>This is the modal content.</div>
                </div> 
            }
       </div>
    )   
   }
   
   export default Child