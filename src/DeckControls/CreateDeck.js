import React, { useState } from "react";
import {
    Link,
    useHistory
  } from "react-router-dom";
import { createDeck } from "../utils/api/index"

function CreateDeck () {
  const history = useHistory();
  const initialFormState = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState({...initialFormState});
 console.log(formData);
  const handleChange = ({ target }) => {  
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createDeck(formData);  
    setFormData({ ...initialFormState });
    history.push("/");
  };
  return (
    <div>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/" className="btn btn-link">Home</Link>
        </li>
        <li className="breadcrumb-item">
          Create Deck
        </li>
      </ol>
    </nav>
    <h1>Create Deck</h1>
      <form name="create" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
          ></input>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            onChange={handleChange}
            value={formData.description}
          ></textarea>
        <button type="submit" className="btn btn-primary my-2">Submit</button> 
        <Link to="/" className="btn btn-secondary my-2">Cancel</Link>
        </div>
      </form>
    </div>
  )
};

export default CreateDeck;

