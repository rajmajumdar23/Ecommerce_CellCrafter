import React from 'react';
import "../About.css"

const About = () => {
  return (
    <div className="about">
      <h2>About CellCrafters</h2>
      <p>
        Welcome to CellCrafters, your ultimate destination for the latest and greatest mobile phones from top brands.
      </p>
      <p>
        CellCrafters was founded with a vision to deliver cutting-edge technology to your fingertips. Our mission is to provide you with the most seamless and enjoyable mobile phone shopping experience.
      </p>
      <p>
        At CellCrafters, we offer a diverse selection of smartphones to cater to your every need. From budget-friendly options to high-end flagship models, we have it all.
      </p>
      <p>
        Our commitment to quality goes beyond just products. We pride ourselves on delivering exceptional customer service. Our dedicated team is here to assist you with any inquiries or concerns, ensuring your satisfaction.
      </p>
      <p>
        Thank you for choosing CellCrafters for your mobile phone needs. Your trust and satisfaction are at the core of our values. Please don't hesitate to <a href="/helpdesk">contact us</a> for any questions, feedback, or special requests. We are excited to serve you!
      </p>
      <p>&copy; 2023 CellCrafters. All rights reserved.</p>
    </div>
  );
};

export default About;
