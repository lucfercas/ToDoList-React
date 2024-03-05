import { useContext, useState } from "react"
import { ListContext } from "../contexts/ListContext";

const AddItemFrom = () => {
    const { addTodo } = useContext(ListContext)
    const [title, setTitle] = useState("")
    const handleSubmit = (e) =>{
      e.preventDefault(); // Prevent form submission from reloading the page
      fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTask }),
      })
      .then(response => response.json())
      .then(() => {
        setTasks([...tasks, { title: newTask }]);
        setNewTask(''); // Clear input after submission
      })
      .catch(error => console.error('Error adding task:', error));
      //  e.preventDefault()
      //  addTodo(title); 
      //  setTitle(""); 
       
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