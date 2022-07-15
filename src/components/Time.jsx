import React, {useState} from 'react'

const Time = ({ user, callback, result, setResult }) => {
    const [time, setTime] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        callback({...user, time: time});
        console.log("step 5 (time) ===> ", user);
    }

    const displayResult = (e) => {
        e.preventDefault();
        setResult(true)
        console.log(result);
    }

  return (
    <div>
        <p>A quelle heure as-tu bu ?</p>
        <form onSubmit={handleSubmit}>
            <input type="datetime-local" lang="fr" name="time" id="time" value={time} onChange={e => setTime(e.target.value)} />
            <button>Ok</button>
        </form>
        <button onClick={displayResult}>Voir le résultat</button>
    </div>
  )
}

export default Time