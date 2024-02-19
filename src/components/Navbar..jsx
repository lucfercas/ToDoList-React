import { useContext } from "react";
import { ListContext } from "../contexts/ListContext";


const Navbar = () => {

    const {items} = useContext(ListContext)
    return (
        <div className="navbar">
            <h1>React ToDo List</h1>
            <p>Currently you have {items.length } things to do...</p>
        </div>
    );

}
 
export default Navbar;