import { useContext } from "react";
import { ListContext } from "../contexts/ListContext";


const ItemDetails = ({ item }) => {
    const { removeTodo, completeToggle, editEnabler, editDoneToggle } = useContext(ListContext)
    return (

      <li>

        <input className="title" 
        style={{ textDecoration: item.complete ? "line-through" : "none" }} 
        value={item.title} 
        onChange={(e)=>{editEnabler(item.id, e.target.value)}} 
        onBlur={() => editEnabler(item.id, item.title)}
        disabled={!item.editing}
                   />
        <button onClick = {() => removeTodo(item.id)}>Delete</button>
        <button onClick = {() => completeToggle(item.id)} >Complete?</button>
        <button onClick = {() => editDoneToggle(item.id)} >{item.editing? "Done": "Edit"}</button>
      </li>
    )
   
}
 
export default ItemDetails;