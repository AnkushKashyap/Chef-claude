import axios from "axios"
import Content from "./Content.jsx"
import { useState } from "react"


export default function Recipe({ ingredients }) {


const [recipe,setRecipe] = useState("")
const [loading,setLoading] = useState(false)


async function generateRecipe(){


try{


setLoading(true)


const response = await axios.post(


"https://router.huggingface.co/v1/chat/completions",


{


model:"meta-llama/Meta-Llama-3-8B-Instruct",


messages:[


{


role:"user",


content:`Create a detailed cooking recipe using:


${ingredients.join(", ")}


Include preparation steps and cooking tips.
please provide me the recipe in presentable format with highlighted headings.`


}


],


max_tokens:500


},


{


headers:{


Authorization:`Bearer ${import.meta.env.VITE_HF_API_KEY}`,


"Content-Type":"application/json",


Accept:"application/json"


}


}


)


console.log(response.data)


setRecipe(


response.data?.choices?.[0]?.message?.content




?? "No recipe generated."


)


}


catch(error){


console.log(


"HF ERROR =",


error.response?.data || error.message


)


setRecipe("⚠️ HuggingFace API Error")


}


finally{


setLoading(false)


}


}


return(


<div>


<button id="g" onClick={generateRecipe}>


{loading ? "Generating..." : "Generate Recipe"}


</button>


<br/><br/>


<pre style={{whiteSpace:"pre-wrap"}}>

<p id="p">{recipe}</p>


</pre>


</div>


)


}
