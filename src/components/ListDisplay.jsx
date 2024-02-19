import { useContext } from "react";
import { ListContext } from "../contexts/ListContext";
import  ItemDetails  from "./ItemDetails"

const ListDisplay = () => {
    const { items } = useContext(ListContext)
    return items.length? ( 
        <div className = "book-list">
            <ul>
               { items.map(item => {
                 return ( <ItemDetails item={item} key={item.id} /> ); 
               })} 
            </ul>
        </div>
    ): (<div className="empty">No oustanding task!</div>)
}
 
export default ListDisplay;