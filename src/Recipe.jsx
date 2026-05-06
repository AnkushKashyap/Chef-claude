const response = await axios.post(
  "https://router.huggingface.co/v1/chat/completions",

  {
    model: "meta-llama/Meta-Llama-3-8B-Instruct",

    messages: [
      {
        role: "user",

        content: `Create a detailed cooking recipe using:

${ingredients.join(", ")}

Generate a recipe in a presentable format with the following structure:

### Recipe Title
- Provide a clear, attractive name for the dish.

### Ingredients
- List all ingredients with quantities in bullet points.

### Preparation Steps
- Write step-by-step instructions, each step numbered.
- Keep steps concise but clear.

### Cooking Tips
- Add 3–5 practical tips for better flavor, texture, or presentation.
- Include storage or serving suggestions if relevant.

### Formatting Guidelines
- Use bold headings for each section.
- Keep the language engaging and easy to follow.
- Avoid long paragraphs; prefer short, skimmable sentences.
`
      }
    ],

    max_tokens: 500
  },

  {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }
)
