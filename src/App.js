import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/newHome';
import { Profile } from './Pages/profile';
import { NotFound } from './Pages/404';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/profiles/:id' element={<Profile/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
