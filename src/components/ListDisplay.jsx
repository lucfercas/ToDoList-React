import { useContext } from "react";
import  ItemDetails  from "./ItemDetails"
import ListHead from "./ListHead"

const ListDisplay = () => {
    const { items } = useContext(ListContext)
    return items.length? ( 
        <div className = "book-list">

            <ul>
                <ListHead />

               { items.map(item => {
                 return ( <ItemDetails item={item} key={item.id} /> ); 
               })} 
            </ul>
        </div>
    ): (<div className="empty">No oustanding task!</div>)
}
 
export default ListDisplay;