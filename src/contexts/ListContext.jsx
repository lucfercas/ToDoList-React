import { useState, createContext, useEffect} from "react"; 
import {v1 as uuid} from "uuid"


export const ListContext = createContext(); 

const ListContextProvider = (props) => {
    const [items, setItems] = useState(dispalyData()); 

    function dispalyData() {
    const localData = localStorage.getItem("items"); 
    return localData ? JSON.parse(localData): []
}
    

    useEffect(()=>{
        localStorage.setItem("items", JSON.stringify(items))
    },[items])

   


    const addTodo = (title) => {
        setItems([...items, {title, complete: false, id: uuid() }])

    }
    const removeTodo = (id) => {
        setItems(items.filter((item) => item.id !== id ))
    }; 


    const completeToggle = (id) =>{
        setItems(items.map(item => item.id ==id?  { ...item, complete: !item.complete } : item))
    };

    return (
        <ListContext.Provider value={{items, addTodo, removeTodo, completeToggle}}>
            { props.children }
        </ListContext.Provider> 

    )




}

export default ListContextProvider
