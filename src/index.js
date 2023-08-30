import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './component/Header/Header';
import Buttons from './component/Button/Button';


const App=()=>{
  return(
    <div className='app'>
      <Header/>
      <Buttons/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
