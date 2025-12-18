import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import ErrorBoundary from './components/ErrorBoundary';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useState } from 'react';

import HomePage from './components/HomePage';

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },1500);
  }


  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
            <Alert alert={alert} />
          <div className='container'>
            <ErrorBoundary>
              <Routes>     
                <Route path="/" element={<HomePage />} />           
                <Route path="/home" element={<Home showAlert={showAlert} />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login showAlert={showAlert} />} />
                <Route path="/signup" element={<SignUp showAlert={showAlert} />} /> 
              
              </Routes>
            </ErrorBoundary>
          </div>
          </Router>
      </NoteState>
    </>
  )
}

export default App
