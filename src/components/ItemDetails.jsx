import { useContext } from "react";
import { ListContext } from "../contexts/ListContext";
import { Trash } from "react-bootstrap-icons"



const ItemDetails = ({ item }) => {
    const { removeTodo, completeToggle, editEnabler, editDoneToggle,importance } = useContext(ListContext)
    return (

      <li>
        <input  type="checkbox" checked={item.complete} onClick = {() => completeToggle(item.id)} />
        <select value={item.importanceLevel} onChange={(e)=>{importance(item.id, e.target.value)}}>
            <option value="pleaseSelect">Please select</option>
            <option value="important">Important</option>
            <option value="notImportant">Not important</option>
            <option value="urgent">Urgent</option>
        </select>

        <input className="title" 
        style={{ textDecoration: item.complete ? "line-through" : "none" }} 
        value={item.title} 
        onChange={(e)=>{editEnabler(item.id, e.target.value)}} 
        onBlur={() => editEnabler(item.id, item.title)}
        disabled={!item.editing}
                   />
        <button onClick = {() => removeTodo(item.id)}><Trash /></button>
        
        <button onClick = {() => editDoneToggle(item.id)} >{item.editing? "Done": "Edit"}</button>
      </li>
    )
   
}
 
export default ItemDetails;