import supabase from "./config/supabaseClient";
// import Add from "./Add"
import { useEffect, useState } from "react";
import ListContextProvider from './contexts/ListContext';
import Navbar from './components/Navbar.';
import ListDisplay from "./components/ListDisplay";
import AddItemFrom from "./components/AddItemForm";
import { fetchWeatherApi } from "openmeteo";

function App() {
  const [fetchError, setFetchError] = useState(null)
  const [tasks, setTasks] = useState(null)

  useEffect(() => {
    const fetchTasks = async () => {
      const {data, error} = await supabase
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





    <div className="App">
      <ListContextProvider>
        <Navbar />
        <ListDisplay />
        <AddItemFrom />

        <div className="page home">
          {fetchError && (<p>{fetchError}</p>)}
          {tasks && (
            <div className="tasks">
              {tasks.map(task => (
                <p>{task.title}</p>
              ))}
            </div>
          )}


        </div>



      </ListContextProvider>
      
     {/* <Add /> */}




    </div>
  );
}
export default App;
