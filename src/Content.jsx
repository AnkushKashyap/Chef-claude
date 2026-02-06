import "./body.css"
import {useState} from 'react'
export default function Main(){

const [state , setState] = useState([])

        const Ingredients = state.map(ing => (
        <ul>
        <li key={ing}>{ing}</li>
        </ul>
        ))

        function handleSubmit(event){
            event.preventDefault()
            const  formData = new FormData(event.currentTarget)
            const newIng = formData.get("ingg")
            setState(prevIng => [...prevIng , newIng])
        }


return(
    <main>
        <div id="boxx">
        <form onSubmit={handleSubmit} id="box">
            <input id="in" type="text" placeholder="e.g. oregano" name="ingg"></input>
            <button id="add">+ Add Ingredients</button>
        </form>
        <ul>
            {Ingredients}
        </ul>
        </div>
    </main>
)

}