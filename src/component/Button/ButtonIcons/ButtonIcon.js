import { Component } from "react"


export default class ButtonIcons extends Component{

 
  render(){
    
   
    const {text}=this.props
    return (  
      <button className="buttons" onClick={this.onBtn}  >{text}</button>
)

  }
}

/*
const ButtonIcons=({text})=>{
    return (  
        <button className="buttons" >{text}</button>
  )
}*/
