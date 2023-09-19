import React from 'react';

function Newsletter() {
  return (
    <div className='Newsletter'>
      <h1 className="newsletter_heading">Never miss an update again, sign up to our newsletter now!!!</h1>
      <form id="subscription">
        <label htmlFor="Email">Email:</label>
        <input type="text" id="Email" name="Email" /><br />
        <label htmlFor="Firstname">Firstname:</label>
        <input type="text" id="Firstname" name="fName" /><br />
        <label htmlFor="Surname">Surname:</label>
        <input type="text" id="Surname" name="sName" /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Newsletter;
