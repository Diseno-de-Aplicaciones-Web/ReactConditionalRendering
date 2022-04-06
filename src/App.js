import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import Testigo1 from './components/Testigo1/Testigo1';
import Testigo2 from './components/Testigo2/Testigo2';

function App() {

  const [ loggedIn, setloggedIn ] = useState(false);
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");


  function usernameChangeHandler(ev) {
    setUsername(ev.target.value);
  }

  function passwordChangeHandler(ev) {
    setPassword(ev.target.value);
  }

  function loginHandler() {
    setloggedIn(true);
  }

  return (
    <>
      <h1>Renderizado condicional</h1>
      <input value={username} onChange={usernameChangeHandler}/>
      <input type="password" value={password} onChange={passwordChangeHandler}/>
      <button onClick={loginHandler}>Login</button>

      <p>Con operador condicional:</p>
      { loggedIn && <Testigo1/>}
      { ! loggedIn && <Testigo2/>}
      
      <p>Con operador ternario</p>
      { loggedIn ? <Testigo1/> : <Testigo2/>}
    </>
  );
}

export default App;
