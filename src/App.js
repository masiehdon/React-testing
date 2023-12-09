import { useState } from 'react';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Game from '../src/components/Game';
import './App.css';
import Login from './components/Login';

function App() {

  const [login, setLogin] = useState(false) 
  function handleLogin() {
    setLogin(curr => !curr)
}

  return (
    <div className="App">
      <Header />
      <Login login={login} handleLogin={handleLogin} />  
      {login &&
      <Game />
      }
      <Footer />
    </div>
  );
}

export default App;
