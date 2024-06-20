import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navv from './pages/Navv';
import Login from './pages/Login'
import Signup from './pages/Signup'
import ReadValue from './pages/ReadValue';
import Main from './pages/Main';
import Update from './pages/Update';

function App() {
  return (
    <Router>
      <Routes>
             <Route exact path='/' element={<Home/>}/>
             <Route path='/navv' element={<Navv/>}/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/signup' element={<Signup/>}/>
             <Route path='/readvalue' element={<ReadValue/>}/>
             <Route path='/main' element={<Main/>}/>
             <Route path='/update' element={<Update/>}/>
      </Routes> 
    </Router>
  );
}

export default App;
