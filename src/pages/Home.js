import supabase from "../config/supabaseClient"
import { useEffect, useState } from "react";

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [tasks, setTasks] = useState(null)

  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase
        .from('tasks')
        .select()

      if (error) {
        setFetchError('Could not fetch the tasks')
        setTasks(null)
        console.log(error)
      }
      if (data) {
        setTasks(data)
        setFetchError(null)
      }
    }
    fetchTasks()
   
  }, [])
  
  return (
    <div className="page home">
      <h2>Home</h2>
      <div className="empty">No oustanding tasks!</div>

      {fetchError && (<p>{fetchError}</p>)}
      {tasks && (
        <div className="tasks">
          {tasks.map(task => (
            <>
            <p>{task.title}</p>
            <p>{task.importanceLevel}</p>
            </>
            
          ))}
        </div>
      )}
    </div>


  );
}

export default Home;