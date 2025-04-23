import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Get in touch with the WonderPet team</p>
      {/* Your contact form or information here */}
      <form>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <textarea placeholder="Your message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;