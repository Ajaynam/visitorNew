import { useEffect } from 'react';
import './App.css';
import Application from './Components/mianApplication/component/Application';
import Routingcomponent from './Components/routingComponent/component/Routingcomponent';
import { useState } from 'react';
import Login from './Components/login/component/Login';
import {useSelector} from 'react-redux'
function App() {

  const isLogedIn = useSelector((state) => {
    console.log(state)
    return state.authSlice.isLogedIn
  })

  return (
    <div className="App">
      {
        isLogedIn ?
          <Application /> :
          <Login/>
      }
    </div>
  );
}

export default App;
