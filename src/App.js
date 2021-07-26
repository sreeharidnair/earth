import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      

     
<Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/Aboutus" component={Aboutus}></Route>
      <Route path="/Contactus" component={Contactus}></Route>
      
      </Switch>
    </div>
    </Router>

 {/* );
}*/}

      

    </div>
  );
}

export default App;