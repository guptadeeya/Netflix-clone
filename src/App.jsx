// eslint-disable-next-line
import React from 'react'
import {BrowserRouter as Router,
Route,
Routes,
// Link,
} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';

const App = () => {
  return (
    <>
    <Router> 
    
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/' element={<Netflix/>}/>
      </Routes>

    </Router>
    </>
  );
  }
export default App