import { Component } from "react"


class ButtonIcons extends Component{
  render(){
   
    
    const {text}=this.props
    return (  
      <button className="buttons"  >{text}</button>
)

  }
}

/*
const ButtonIcons=({text})=>{
    return (  
        <button className="buttons" >{text}</button>
  )
}*/
export default ButtonIcons