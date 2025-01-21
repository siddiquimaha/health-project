import React, { useState } from 'react';
import contactImage from '../assets/cds_450_v2-1.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [allUserData, setAllUserData] = useState([]); // Array to store all submitted data

  const handleChange = (e) => {
    const { name, value, message } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    setAllUserData((prevData) => [...prevData, newUserData]); // Append new data to arrayc
    console.log(allUserData);
    alert('Data submitted');
    // setFormData({ name: '', email: '', message: '' }); // Clear form after submission
  };
  return (
    <>
      <div id="contact-sec">
        <div className="contact-div">
          <div className="contacttext-div">
            <form action="#" id="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="name" required onChange={handleChange}/>

              <label htmlFor="email">Email*</label>
              <input type="email" id="email" name="email" placeholder="email" required onChange={handleChange}/>

              <label htmlFor="message">Message*</label>
              <textarea id="message" name="message" rows="5" placeholder="message" required onChange={handleChange}></textarea>

              <p className="form-p">Processing a professional data</p>
              <label>
                I consent to the processing of personal data after reading the privacy policy
              </label>

              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="image-div">
            <h2>CDS22-formula</h2>
            <img src={contactImage} alt="Contact" />
          </div>
        </div>
      </div>
    </>
  );
}
