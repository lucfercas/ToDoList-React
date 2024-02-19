import { useContext, useState } from "react"
import { ListContext } from "../contexts/ListContext";

const AddItemFrom = () => {
    const { addTodo } = useContext(ListContext)
    const [title, setTitle] = useState("")
    const handleSubmit = (e) =>{
       e.preventDefault()
       addTodo(title); 
       setTitle(""); 
       
    }



    return ( 
        <form onSubmit ={handleSubmit}>
          <input type="text" placeholder ="what is on your mind?" value = {title}
          onChange = {(e) => setTitle(e.target.value)} required />
            <input type="submit" value="add Todo" />
        </form>
     );
}
 
export default AddItemFrom;