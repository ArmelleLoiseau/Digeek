import React, { useState } from 'react'

const Gender = ({ user, callback }) => {

    const [gender, setGender] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        callback({...user, gender : gender})
        console.log("step 2 (gender) ===>", user)
    }

  return (
    <div>
        <p>Quel est ton genre :</p>
            <form onSubmit={handleSubmit}>
                <select name="gender" id="gender" defaultValue={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="" disabled>Choisisez une option</option>
                    <option value="femme">Femme</option>
                    <option value="homme">Homme</option>
                </select>
                <button>Ok</button>
            </form>
    </div>
  )
}

export default Gender