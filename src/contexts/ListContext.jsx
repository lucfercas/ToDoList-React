import { useState, createContext} from "react"; 
import {v1 as uuid} from "uuid"


export const ListContext = createContext(); 

const ListContextProvider = (props) => {
    const [items, setItems] = useState([
        {title: 'buy Milk', complete: false, id: 1 }, 
        {title: 'wash the dog', complete: false, id: 2 }
    ]); 

    const addTodo = (title) => {
        setItems([...items, {title: "get money", complete: false, id: uuid() }])

    }
    const removeTodo = (id) => {
        setItems(items.filter((item) => item.id !== id ))
    }; 
    return (
        <ListContext.Provider value={{items, addTodo, removeTodo}}>
            { props.children }
        </ListContext.Provider> 

    )
}

export default ListContextProvider
