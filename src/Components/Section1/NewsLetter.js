import React, { useState } from 'react';

function Newsletter() {
  //variables to store input
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Display an alert with the form input values
    alert(`Your inputs are \nEmail: ${email}\nFirst name: ${firstName}\nSurname: ${surname}`);
  };

  return (
    <div className='Newsletter'>
      <h1 className="newsletter_heading">Never miss an update again, sign up to our newsletter now!!!</h1>
      <form id="subscription" onSubmit={handleSubmit}>
        <label htmlFor="Email">Email:</label>
        <input
          type="text"
          id="Email"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <label htmlFor="fName">First name:</label>
        <input
          type="text"
          id="fName"
          name="fName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        /><br />
        <label htmlFor="Surname">Surname:</label>
        <input
          type="text"
          id="Surname"
          name="sName"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Newsletter;
