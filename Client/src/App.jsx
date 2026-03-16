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
import Profile from './components/Profile';
import Footer from './components/Footer';
import { useCallback, useState } from 'react';
import HomePage from './components/HomePage';

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = useCallback((message, type) => {
    setAlert({ msg: message, type: type })
    setTimeout(() => { setAlert(null) }, 1500);
  }, [])

  return (
    <NoteState>
      <Router>
        <div className="page-wrapper">
          <Navbar />
          <Alert alert={alert} />
          <main className="app-content">
            <div className="container app-shell">
              <ErrorBoundary>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/home" element={<Home showAlert={showAlert} />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<Login showAlert={showAlert} />} />
                  <Route path="/signup" element={<SignUp showAlert={showAlert} />} />
                  <Route path="/profile" element={<Profile showAlert={showAlert} />} />
                </Routes>
              </ErrorBoundary>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </NoteState>
  )
}

export default App
