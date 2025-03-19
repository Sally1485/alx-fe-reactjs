import {useState} from 'react'

function AddRecipeForm() {
    const [formData, setFormData] =useState({
  recipeTitle: " ",
  ingredients: " ",
  preparartions: " ",

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.recipeTitle.trim()) newErrors.recipeTitle = "Name is required.";
    if (!formData.ingredients.trim()) newErrors.ingredients = "Ingredients is required.";
    if (!formData.preparartions.trim()) newErrors.password = "Preparations is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Form is valid if no errors
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.recipeTitle]: e.target.value });
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
    <div className='max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg'>
        <textarea name="recipe Title" id="recipeTitle" className="text-xl font-semibold mb-4"></textarea>
        <textarea name="ingredients" id="ingredients" className="text-xl font-semibold mb-4"></textarea>
        <textarea name="preparations" id="prepations" className="text-xl font-semibold mb-4"></textarea>
        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>submit</button>
    </div>
  )
}

export default AddRecipeForm