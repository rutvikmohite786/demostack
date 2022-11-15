import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import '../src/css/navbar.css';
import Contact from "./components/Contact";
class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <ul className="nav navs navs2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
            <Routes>
              <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/login' element={< Login />}></Route>
              <Route exact path='/contact' element={< Contact />}></Route>
            </Routes>
          </div>
        </Router>
    );
  }
}
export default App;
