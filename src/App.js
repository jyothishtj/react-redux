import React from 'react';
import Navbar from './components/navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Recipe from './components/Recipe';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* react route adds props property which has .history to method using which you can programmatically redirect to other component */}
        {/* solution: withRouter */}
        <Switch> 
          {/* load onlly one compoent  */}
        <Route exact path='/' component={Home}/>
        <Route path='/About' component={About}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/:recipe_id' component={Recipe} /> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
