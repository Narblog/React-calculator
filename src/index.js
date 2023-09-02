import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './component/Header/Header';
import Buttons from './component/Button/Button';


const App = () => {
  const items = [
    { text: "C", id: 1 },
    { text: "<", id: 2 },
    { text: "/", id: 3 },
    { text: "X", id: 4 },
    { text: "7", id: 5 },
    { text: "8", id: 6 },
    { text: "9", id: 7 },
    { text: "-", id: 8 },
    { text: "4", id: 9 },
    { text: "5", id: 10 },
    { text: "6", id: 11 },
    { text: "+", id: 12 }
  ];

  return (
    <div className='app'>
      <Header />
      <Buttons items={items} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
