  import React, { useState } from 'react';
  import '../Helpdesk.css';
  import backgroundImage from "../background.jpg"

  const Helpdesk = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      reasonForContact: '',
      message: '',
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        reasonForContact: '',
        message: '',
      });
    };

    return (
      <>
        <div className="background-container">
          <img src={backgroundImage} alt="Background" className="background-image" />
          <div id="helpdesk-container" className="helpdesk-background">
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="card-body" id="Form">
                <label className="heading">Contact Us</label>
                <input type="text" className="form-control" id="Input-Contact-Form-Fname" aria-describedby="PasswordHelp" placeholder="Enter Your First Name" />
                <input type="text" className="form-control" id="Input-Contact-Form-Lname" aria-describedby="PasswordHelp" placeholder="Enter Your Last Name" />
                <input type="text" className="form-control" id="Input-Contact-Form-Mail" aria-describedby="PasswordHelp" placeholder="Enter Your Email Address" />
                <input type="number" className="form-control" id="Input-Contact-Form-Phone" aria-describedby="PasswordHelp" placeholder="Enter Your Phone Number" />
                <textarea placeholder="Reason to contact us" id="Input-Contact-Form-Phone-Reason"></textarea>
                <br />
                <button type="submit" id="Contact-submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };
  
  export default Helpdesk;
