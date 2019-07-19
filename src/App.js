import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './containers/homepage/homepage';
import AddProject from './containers/add-project/add-project';
import './App.css';
import './assets/css/font-awesome.css'

function App() {
  return (
    <Router>
        <Route path="/" exact component={Homepage} />
        <Route path="/add" component={AddProject} />
    </Router>
  );
}

export default App;
