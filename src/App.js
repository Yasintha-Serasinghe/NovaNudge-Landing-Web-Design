import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Dashbord from './Components/Dashbord';











function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/l" element={<Signin/>} /> 
         <Route path="/r" element={<Signup/>} /> 
         <Route path="/d" element={<Dashbord/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
