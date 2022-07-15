import './App.css';
import { useState, useEffect } from "react";
import Name from './components/Name';
import Gender from './components/Gender';
import Weight from './components/Weight';
import Drinks from './components/Drinks';
import Time from './components/Time';
import Result from './components/Result';

function App() {
  // initialize state to store the user's info
  const [user, setUser] = useState({name: "", gender: "", weight: "", drinks: [], time:""})
  
  const [result, setResult] = useState(false)

  return (
    <div className="App">
      <Name user={user} callback={setUser}/>
      <Gender user={user} callback={setUser}/>
      <Weight user={user} callback={setUser}/>
      <Drinks user={user} callback={setUser}/>
      <Time user={user} callback={setUser} result={result} setResult={setResult} />
      <Result user={user} result={result}/>
    </div>
  );
}

export default App;
