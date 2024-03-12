import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import supabase from "./config/supabaseClient";
import { useEffect, useState } from "react";

// Components
import ListDisplay from "./components/ListDisplay";
import AddItemFrom from "./components/AddItemForm";

// Pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";

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
      
      <div className="navbar">
      <h1 className="text-l font-bold underline">React ToDo List</h1>
      <p>Currently you have things to do...</p>
    </div>

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
    </div>
  );
}
export default App;
