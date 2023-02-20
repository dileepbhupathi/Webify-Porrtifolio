import React from 'react';
import './App.css';
import { WebifyBackToTop } from './components/WebifyBackToTop/WebifyBackToTop';
import { WebifyPortifolioBody } from './components/WebifyPortifolioBody/WebifyPortifolioBody';
import { WebifyPortifolioFooter } from './components/WebifyPortifolioFooter/WebifyPortifolioFooter';
import { WebifyNavbar } from './components/WebifyPortifolioNavbar/WebifyNavbar';

function App() {
  return (
    <div className='app'>
      <WebifyNavbar/>
      <div className='cursor'>
      <WebifyPortifolioBody/>
      <WebifyPortifolioFooter/>
      <WebifyBackToTop/>
      </div>
    </div>
  );
}

export default App;
