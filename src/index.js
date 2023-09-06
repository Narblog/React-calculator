import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './component/Header/Header';
import Buttons from './component/Button/Button';


class App extends Component{
 
  render(){
    return (
      <div className='app'>
        <Header />
        <Buttons />
      </div>
    )
  }
}

 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
