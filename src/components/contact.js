import React, { useState } from 'react';
import './contact.css'; // Importing the CSS file

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    event: '',
    time: '',
    mode:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Data:', formData);
    // Add your form submission logic here
  };

  return (
   
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div>
          <label color='white' >Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Number Input */}
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Company Name Input */}
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        {/* Schedule Event Input */}
        <div>
          <label>Schedule Event:</label>
          <input
            type="text"
            name="event"
            value={formData.event}
            onChange={handleChange}
          />
        </div>

        {/* Schedule Time Input */}
        <div>
          <label>Schedule Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Online or Offline:</label>
          <input
            type="text"
            name="mode"
            value={formData.mode}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
