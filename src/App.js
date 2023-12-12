import { useState } from 'react';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Game from '../src/components/Game';
import './App.css';
import Login from './components/Login';

function App() {

  const [login, setLogin] = useState(false) 
  const [userNameInput, setUserNameInput] = useState('')
  const [userName, setUserName] = useState('')

  function handleLogin() {
    setLogin(curr => !curr)
    setUserName(userNameInput)
    console.log(userNameInput)
}

function handleUserNameInput(e) {
  const userNameInput = e.target.value
  setUserNameInput(userNameInput)
  console.log(userName)
}

  return (
    <div className="App">
      <Header 
      userName={userName} 
      login={login}
      />
      
      <Login
      login={login} 
      handleLogin={handleLogin}
      userName={userNameInput}
      handleUserNameInput={handleUserNameInput}
      />  
      
      {login &&
      <Game />
      }
      <Footer />
    </div>
  );
}

export default App;
