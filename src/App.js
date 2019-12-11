import React from 'react';
import './scss/main.scss';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/Home';
import Steps from './components/Steps';
import UserPanel from './components/Reusables/UserPanel';
import NewUserPanel from './components/Reusables/NewUserPanel';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Collab from './components/Collab';


function App() {
  return (
    <div>
     <HashRouter>
       <>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/userPanel' component={UserPanel}/>
          <Route path='/newUserPanel' component={NewUserPanel}/>
          <Route path='/steps' component={Steps}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/collab' component={Collab}/>
        </Switch>
        <Steps/>
        <About/>
        <Collab/>
        <Contact/>
        <Footer/>
       </>
     </HashRouter>
    </div>
  );
}

export default App;
