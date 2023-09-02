
import ButtonIcons from "./TodoListItem/ButtonIcon"
import "./button.css"
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
}
export default Buttons