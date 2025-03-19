import {useState} from 'react'

function AddRecipeForm() {
    const [formData, setFormData] =useState({
  recipeTitle: " ",
  ingredients: " ",
  preparartions: " ",

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Name is required.";
    if (!formData.ingredients.trim()) newErrors.ingredients = "Ingredients is required.";
    if (!formData.steps.trim()) newErrors.steps = "Preparations is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Form is valid if no errors
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.title]: e.target.value });
  }
  


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      // Handle form submission logic here
    }
  }

    })
  return (
    <div form onSubmit={handleSubmit} className='max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg' >
        <textarea name="title" id="title" className="text-xl font-semibold mb-4">title:</textarea>
        <textarea name="ingredients" id="ingredients" className="text-xl font-semibold mb-4">ingredients:</textarea>
        <textarea name="steps" id="steps" className="text-xl font-semibold mb-4">steps:</textarea>
        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>submit</button>
    </div>
  )
}

export default AddRecipeForm