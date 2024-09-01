import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="form-container">
      <h2>Contact Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone No</label>
          <input type="tel" id="phone" name="phone" />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" name="company" />
        </div>

        <div className="form-group">
          <label htmlFor="event">Scheduled Event</label>
          <input type="text" id="event" name="event" />
        </div>

        <div className="form-group">
          <label htmlFor="time">Scheduled Time</label>
          <input type="datetime-local" id="time" name="time" />
        </div>

        <div className="form-group">
          <label>Mode</label>
          <div className="radio-group">
            <input type="radio" id="online" name="mode" value="online" />
            <label htmlFor="online">Online</label>

            <input type="radio" id="offline" name="mode" value="offline" />
            <label htmlFor="offline">Offline</label>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
