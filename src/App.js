import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer.js";
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;