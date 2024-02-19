import { useContext } from "react";
import { ListContext } from "../contexts/ListContext";


const ItemDetails = ({ item }) => {
    const { removeTodo } = useContext(ListContext)
    return (

      <li>
        <div className="title">{item.title}</div>
      </li>
    )
   
}
 
export default ItemDetails;