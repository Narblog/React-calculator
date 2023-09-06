import {Component} from "react";
import "./button.css"

export default class  Buttons extends Component{
 
  onBtn=(event)=>{
   console.log(event.target.name)
  }
  render(){
    return (
      <div>
        <div className="datadiv">
          <div className="angry-grid">
            <button id="item-1" name="/" onClick={this.onBtn}>/</button>
            <button id="item-2" name="<" onClick={this.onBtn}>#</button>
            <button id="item-3" name="*" onClick={this.onBtn}>X</button>
            <button id="item-4" name="-" onClick={this.onBtn}>-</button>
            <button id="item-5" name="9" onClick={this.onBtn}>9</button>
            <button id="item-6" name="8" onClick={this.onBtn}>8</button>
            <button id="item-7" name="7" onClick={this.onBtn}>7</button>
            <button id="item-8" name="4" onClick={this.onBtn}>4</button>
            <button id="item-9" name="5" onClick={this.onBtn}>5</button>
            <button id="item-10" name="6" onClick={this.onBtn}>6</button>
            <button id="item-11" name="1" onClick={this.onBtn}>1</button>
            <button id="item-12" name="2" onClick={this.onBtn}>2</button>
            <button id="item-13" name="3" onClick={this.onBtn}>3</button>
            <button id="item-14" name="+" onClick={this.onBtn}>+</button>
            <button id="item-15" name="=" onClick={this.onBtn}>=</button>
            <button id="item-16" name="0" onClick={this.onBtn}>0</button>
            <button id="item-17" name="." onClick={this.onBtn}>.</button>
            <button id="item-18" name="Clear" onClick={this.onBtn}>C</button>
          </div></div>
      </div>
    )
  }
}

/*
const Buttons = ({ items }) => {
  const data = items.map(({ text, id, }) => {
    return (<ButtonIcons text={text} key={id} />)
  });
  return (
    <div>
      <div className="datadiv">{data}
        <div className="angry-grid">
          <button id="item-0">1</button>
          <button id="item-1">2</button>
          <button id="item-2">3</button>
          <button id="item-3">=</button>
          <button id="item-4">0</button>
          <button id="item-5">.</button>
        </div></div>
    </div>


  )
}*/
