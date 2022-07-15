import React, { useState } from 'react'

const Name = ({ user, callback }) => {

    const [name, setName] = useState("") 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        callback({...user, name : name})
        console.log("step 1 (name) ===>", user)
        setName("")
    }

  return (
    <div>
       <div>
           <p>Saisis ton prénom :</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <button>Ok</button>
            </form>
       </div>
    </div>
  )
}

export default Name