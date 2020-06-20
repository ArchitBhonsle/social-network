import React from 'react';
import './App.css';

import { Navbar } from './components/Navbar';
import { UserContextManager } from './contexts/UserContext';

function App() {
  return (
    <UserContextManager>
      <div className='App'>
        <Navbar />
      </div>
    </UserContextManager>
  );
}

export default App;
