import "./body.css"
import {useState} from 'react'
import Recipe from './Recipe'

export default function Content(){

const [state , setState] = useState([])
const [showRecipe, setRecipe] = useState(false)

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
            event.currentTarget.reset();
        }

        function handleRecipe(){
            setRecipe(true)
        }


return(
    <main>
        <div id="boxx">
        <form onSubmit={handleSubmit} id="box">
            <input id="in" type="text" placeholder="e.g. oregano" name="ingg"></input>
            <button id="add">+ Add Ingredients</button>
        </form>
        <ul id="ingred">
            {Ingredients}
        </ul>
        {state.length > 0 && !showRecipe && (
            <button id="r" onClick={handleRecipe}>
                Create Recipe
            </button>
        )} 
        <div id="i"> 
   {showRecipe && <Recipe ingredients={state} />}
        </div>
        </div>
    </main>
)

}