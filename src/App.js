import { useEffect } from 'react';
import './App.css';
import Application from './Components/mianApplication/component/Application';
import Routingcomponent from './Components/routingComponent/component/Routingcomponent';
import { useState } from 'react';
import Login from './Components/login/component/Login';
function App() {

  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className="App">
      {
        isLogin ?
          <Application isLogin={isLogin} /> :
          <Login isLogin={isLogin} setIsLogin={setIsLogin} />
      }
    </div>
  );
}

export default App;
