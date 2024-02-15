
import { useState } from "react"


function Add() {

    const [item, setItem] = useState("")



    function create(event){
        event.preventDefault()
        setItem(event.target.todoItem.value) 
    }


    return (
        <form onSubmit={create}>
            <input name="todoItem"  />
            <button>Create</button>
            <div>{item}</div>

        </form>

    )

}


export default Add