// import { useState } from 'react';
import './App.css';
// import AddOption from './components/AddOption';
// import JobPosting from './components/JobPosting';
import Title from './components/Title';
import FinalTesting from './components/antdComponents/FinalTesting';
import Navbar from './components/antdComponents/Navbar';
import AppContext from './context/contextApi';

function App() {
  return (
    <AppContext>
      <div className="App">
        <Title/>
        {/* <AddOption /> */}
        {/* <JobPosting /> */}
        {/* <Navbar/> */}
        <FinalTesting/>
      </div>
    </AppContext>
  );
}

export default App;
