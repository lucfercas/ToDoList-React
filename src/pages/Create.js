import { useState } from "react"
import supabase from "../config/supabaseClient"
import { useNavigate } from "react-router-dom"

const Create = () => {
    const navigate = useNavigate()

    const [title, setTtitle] = useState('')
    const [complete, setComplete] = useState('')
    const [edit, setEdit] = useState('')
    const [importance, setImportance] = useState('')
    const [formError, setFormError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title) {
            setFormError('Please type something')
            return
        }
        console.log(title)

        const {data, error} = await supabase
            .from('tasks')
            .insert([{ title}])
            .select()
        
            if (error) {
                console.log(error)
                setFormError('Please insert title')
            }
            if (data) {
                console.log(data)
                setFormError(null)
                navigate('/')
            }

    }

    return ( 
        <div className="page create">
            <h2>Create</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">add a task</label>
                <input 
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTtitle(e.target.value)}></input>

            </form>
        </div>
     );
}
 
export default Create ;