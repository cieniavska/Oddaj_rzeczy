import React from 'react';
import './scss/main.scss';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/Home';
import UserPanel from './components/Reusables/UserPanel';
import NewUserPanel from './components/Reusables/NewUserPanel';
import Logout from './components/Logout';
import GiveAwayForm from './components/GiveAwayForm';


function App() {
  return (
    <div>
     <HashRouter>
       <>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/userPanel' component={UserPanel}/>
          <Route path='/newUserPanel' component={NewUserPanel}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/giveAwayForm' component={GiveAwayForm}/>
        </Switch>
       </>
     </HashRouter>
    </div>
  );
}

export default App;
