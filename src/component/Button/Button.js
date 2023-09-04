import {Component} from "react";
import ButtonIcons from "./ButtonIcons"
import "./button.css"

class  Buttons extends Component{

  render(){
    const getStyle=({id})=>{
      if(id==="1"){
        return{backgroundColor:"red"}
      }else if(id===2){
        return{backgroundColor:"black"}
      }
      else{
        return{backgroundColor:"brown"}
      }
    }
  const {items}=this.props
    const data = items.map(({ text, id }) => {
      return (<ButtonIcons text={text} key={id} style={getStyle(id)} />)
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
export default Buttons