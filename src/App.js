// import logo from './logo.svg';
import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode]=useState('light')
  const [alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type: type
    })
  }

  const changeMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "primary");
    }
  }
  return ( 
    <>
    <Router>
<Navbar title="TextUtils"  mode={mode} changeMode={changeMode}/>
<Alert alert={alert}/>
<Switch>
          <Route exact path="/about">
          <About mode={mode}/>
          </Route>
          <Route path="/">
          <Textform showAlert={showAlert} heading ="form formatting" mode={mode}/>
          </Route>
        </Switch>

{/* <div className="container"> 
</div> */}
</Router>
    </>
  );
}

export default App;
