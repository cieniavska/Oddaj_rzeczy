import React from 'react';
import './scss/main.scss';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/Home';
import Steps from './components/Steps';


function App() {
  return (
    <div> 
     <HashRouter>
       <>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/steps' component={Steps}/>
        </Switch>
       </>
     </HashRouter>
    </div>
  );
}

export default App;
