import React, {useState} from 'react'

const Weight = ({ user, callback }) => {
    const [weight, setWeight] = useState();
  
    const handleSubmit = (e) => {
        e.preventDefault();
        callback({...user, weight : weight})
        console.log("step 3 (weight) ===> ", user)
        setWeight("")
    }

    return (
    <div>
        <div>
            <p>Saisis ton poids (en kg) :</p>
            <form onSubmit={handleSubmit}>
                <input type="number" min="0" name="name" id="name" value={weight} onChange={(e) => setWeight(e.target.value)} />
                <button>Ok</button>
            </form>
       </div>
    </div>
  )
}

export default Weight