import { useContext, useState } from "react"


const AddItemFrom = () => {
    const { addTodo } = useContext(ListContext)
    const [title, setTitle] = useState("")
    const handleSubmit = (e) =>{
      e.preventDefault(); // Prevent form submission from reloading the page


       addTodo(title); 
       setTitle(""); 
       
    }


    return ( 
        <form onSubmit ={handleSubmit}>
          <input type="text" placeholder ="what is on your mind?" value = {title}
          onChange = {(e) => setTitle(e.target.value)} required />
            <input type="submit" value="ADD TODO" />
        </form>
     );
}
 
export default AddItemFrom;