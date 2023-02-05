import React, { useState } from "react";

function NewTaskForm({ categories }) {
  const newCategories = categories.filter(category => category !== "All")

  const [formData, setFormData] = useState({
    text:"",
    category: ""
  })

  function handleInput(event) {
    const value = event.target.value // user input value
    const name = event.target.name   // input name attritube
    setFormData({...formData, [name]: value})
  }
  console.log(formData)
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleInput}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleInput}>
          {/* render <option> elements for each category here */}

          {newCategories.map(category => {
            return <option value={category} key={category}>{category}</option>
          })}

        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
