// This is Text Utils I have build while learning React with the help of COdeWithHarry

import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import { Route, Routes} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");  // tells if darkmode enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode Enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "Success");
    }
  }

  return (
    <>
    <Navbar title= "TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert} />
      
      {/* Browser router added in index.js instead of here */}
        <Routes>
          <Route path="/" element={<TextForm heading="Enter text here" mode={mode} showAlert={showAlert}/>}/>
          <Route path="/about" element={<About mode={mode}></About>}></Route>
        </Routes>
    </>
  );
}

export default App;
