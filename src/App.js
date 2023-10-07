import { useEffect } from 'react';
import './App.css';
import Application from './Components/mianApplication/component/Application';

function App() {

  useEffect(() => {
    return () => {
      console.log('EXIT')
      localStorage.clear();
    }
  })
  return (
    <div className="App">
      <Application/>
    </div>
  );
}

export default App;
