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


Generate a recipe in a presentable format with the following structure:

### 🍽️ Recipe Title
- Provide a clear, attractive name for the dish.

### 🛒 Ingredients
- List all ingredients with quantities in bullet points.

### 🥣 Preparation Steps
- Write step-by-step instructions, each step numbered.
- Keep steps concise but clear.

### 🔥 Cooking Tips
- Add 3–5 practical tips for better flavor, texture, or presentation.
- Include storage or serving suggestions if relevant.

### ✨ Formatting Guidelines
- Use bold headings for each section.
- Keep the language engaging and easy to follow.
- Avoid long paragraphs; prefer short, skimmable sentences.


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
