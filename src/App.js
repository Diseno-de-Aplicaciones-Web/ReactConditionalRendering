import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import Testigo from './components/Testigo/Testigo';
import Testigo2 from './components/Testigo2/Testigo2';

function App() {

  const [ loggedIn, setloggedIn ] = useState(false);

  return (
    <>
      <h1>Renderizado condicional</h1>
      { loggedIn && <Testigo/>}
      { loggedIn ? <Testigo/> : <Testigo2/>}
    </>
  );
}

export default App;
