import './App.css';
import { BrowserRouter,Route} from 'react-router-dom';
import home from './home';
import about from './about';
import Login from './login';
import producat1 from './producat1';
import producat2 from './producat2';
import producat3 from './producat3';
import address from './address';
// import Registe from './registe';

import Singup from './Singup';
import System from './System';
import Payment from './Payment';





function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Route exact path='/' component={home}/>
        <Route exact path='/home' component={home}/>
        <Route exact path='/about' component={about}/>  
        <Route exact path='/login' component={Login}/> 
        <Route exact path='/producat1' component={producat1}/> 
        <Route exact path='/producat2' component={producat2}/> 
        <Route exact path='/producat3' component={producat3}/> 
        <Route exact path='/address' component={address}/> 
        <Route exact path='/Singup' component={Singup}/>
        <Route exact path='/System' component={System}/>
        <Route exact path='/Payment' component={Payment}/>
       
    </div>
    </BrowserRouter>
  );
}

export default App;
