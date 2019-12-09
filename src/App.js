import React from 'react';
import './scss/main.scss';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div> 
     <HashRouter>
       <>
        <Switch>
          <Route path='/' component={Home}/>
        </Switch>
       </>
     </HashRouter>
    </div>
  );
}

export default App;
