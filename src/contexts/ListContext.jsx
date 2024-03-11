import { useState, createContext} from "react"; 
// import {v1 as uuid} from "uuid"
// const model = require("../../model/tasks.js")

export const ListContext = createContext(); 

const ListContextProvider = (props) => {
    const [items, setItems] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('http://localhost:3001/tasks');
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const data = await response.json();
    //             setItems(data);
    //         } catch (error) {
    //             console.error("There was a problem with your fetch operation:", error);
    //         }
    //     };
    
    //     fetchData();
    // }, []);



   


    const addTodo = (title) => {

        // setItems([...items, {title, complete: false, editing: false, importanceLevel: "please select", id: uuid() }])
    }


    const removeTodo = (id) => {
        setItems(items.filter((item) => item.id !== id ))
    }; 


    const completeToggle = (id) =>{
        setItems(items.map(item => item.id === id?  { ...item, complete: !item.complete } : item))
    };

    const editEnabler = (id, newTitle) => {
        setItems(items.map(item => item.id === id? {...item, title: newTitle } : item))
    }

    const editDoneToggle = (id) => {
        setItems(items.map(item => item.id === id? { ...item, editing: !item.editing } : item))
    }

    const importance = (id, newImportanceLevel) => {
        setItems (items.map(item => item.id === id? {...item, importanceLevel: newImportanceLevel } : item ))
    }

    



    return (
        <ListContext.Provider value={{items, addTodo, removeTodo, completeToggle,editEnabler, editDoneToggle, importance}}>
            { props.children }
        </ListContext.Provider> 

    )




}

export default ListContextProvider
