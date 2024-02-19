import { useContext } from "react";
import { ListContext } from "../contexts/ListContext";


const ItemDetails = ({ item }) => {
    const { removeTodo } = useContext(ListContext)
    return (

      <li onClick = {() => removeTodo(item.id)}>
        <div className="title">{item.title}</div>
      </li>
    )
   
}
 
export default ItemDetails;