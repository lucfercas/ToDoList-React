import { useContext } from "react";
import { ListContext } from "../contexts/ListContext";


const ItemDetails = ({ item }) => {
    const { removeTodo, completeToggle } = useContext(ListContext)
    return (

      <li>
        <div className="title" style={{ textDecoration: item.complete ? "line-through" : "none" }}>{item.title}</div>
        <button onClick = {() => removeTodo(item.id)}>Delete</button>
        <button onClick = {() => completeToggle(item.id)} >Complete?</button>
      </li>
    )
   
}
 
export default ItemDetails;