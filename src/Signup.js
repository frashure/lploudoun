import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className="Signup">
        <form>
            First name:
            <br />
            <input type="text" name="firstName"></input>
            Last name:
            <br />
            <input type="text" name="lastName"></input>
            Email:
            <br />
            <input type="text" name="email"></input>
        </form>
    </div>
  );
}

export default Signup;
