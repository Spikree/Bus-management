import React, { useState } from 'react';
import './form.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    class: "",
    city: "Miraj",
    price: 0,
    year: "fy",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user', formData);
      toast.success("user data submitted sucessfully")
    } catch (error) {
      toast.error("failed submitting user data")
    }
  };

  return (
    <div className='form'>
      <ToastContainer />
      <form className="form-elements" onSubmit={handleSubmit}>
        <div className="form-elements name">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder='Enter your name'
          />
        </div>

        <div className="form-elements department">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            placeholder='Enter department'
          />
        </div>

        <div className="form-elements class">
          <label htmlFor="class">Class:</label>
          <input
            type="text"
            id="class"
            name="class"
            value={formData.class}
            onChange={handleChange}
            required
            placeholder='Enter class'
          />
        </div>

        <div className="form-elements city">
          <label htmlFor="city">City:</label>
          <select
            name="city"
            id="city"
            value={formData.city}
            onChange={handleChange}
          >
            <option value="Miraj">Miraj</option>
            <option value="Sangli">Sangli</option>
            <option value="Kolhapur">Kolhapur</option>
          </select>
        </div>

        <div className="form-elements price">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            placeholder='Enter price'
          />
        </div>

        <div className="form-elements year">
          <label htmlFor="year">Year:</label>
          <select
            name="year"
            id="year"
            value={formData.year}
            onChange={handleChange}
          >
            <option value="fy">first year</option>
            <option value="sy">second year</option>
            <option value="ty">third year</option>
            <option value="ly">final year</option>
          </select>
        </div>

        <button className='submit-button' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
