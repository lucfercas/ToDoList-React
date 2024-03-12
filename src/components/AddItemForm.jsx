import { useState } from "react"


const AddItemFrom = () => {
    
    const [title, setTitle] = useState("")
    const handleSubmit = (e) =>{
      e.preventDefault(); // Prevent form submission from reloading the page


        
       
    }


    return ( 
        <form onSubmit ={handleSubmit}>
          <input type="text" placeholder ="what is on your mind?" value = {title}
          />
            <input type="submit" value="ADD TODO" />
        </form>
     );
}
 
export default AddItemFrom;