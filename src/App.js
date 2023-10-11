import { useEffect } from 'react';
import './App.css';
import Application from './Components/mianApplication/component/Application';
import Routingcomponent from './Components/routingComponent/component/Routingcomponent';
import { useState } from 'react';
import Login from './Components/login/component/Login';
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const isLogedIn = useSelector((state) => {
    return state.authSlice.isLogedIn
  })

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(updateState(false))
  // },[])

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
