import React from 'react';
import './Signup.css';
import Thanks from './Thanks.js';


class Signup extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      resident: 'T',
      submitted: false,
      err: false,
      errorText: ''
  }

  this.handleChangeEmail = this.handleChangeEmail.bind(this);
  this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
  this.handleChangeLastName = this.handleChangeLastName.bind(this);
  this.handleChangeResident = this.handleChangeResident.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleRetry = this.handleRetry.bind(this);

}

handleChangeFirstName(e) {
  this.setState({firstName: e.target.value});
}

handleChangeLastName(e) {
  this.setState({lastName: e.target.value});
}

handleChangeEmail(e) {
  this.setState({email: e.target.value});
}

handleChangeResident(e) {
  this.setState({resident: e.target.value});
}

handleRetry(e) {
  this.setState({submitted: false});
}

async handleSubmit(e) {
  e.preventDefault();

  await fetch('https://api.virginiaelects.com/lploudoun/', {
  method: 'POST',
  body: JSON.stringify({
    'fName': this.state.firstName,
    'lName': this.state.lastName,
    'email': this.state.email,
    'resident': this.state.resident
  }),
  headers: {
    'Content-Type': 'application/json',
  }
})
.then ((response) => {
  return response.json()
})
.then((jsonRes) => {
  console.log(jsonRes);
  console.log(jsonRes.errno == 1062);
  if (jsonRes.errno === 1062) {
    this.setState({err: true});
    this.setState({errorText: jsonRes.code});
    this.setState({submitted: true});
  }
});
}

render() {
    return (
        <div className="Signup">
          {this.state.submitted ?
            this.state.err ?
              <div>It looks like that email is already in our list.
                <br />
                <br />
                <button onClick={this.handleRetry}>Try Again</button>
              </div>
          : <Thanks err={this.state.err}/> :
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChangeFirstName}></input>
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChangeLastName}></input>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email"  value={this.state.email} onChange={this.handleChangeEmail}></input>
            <label htmlFor="resident">Are you a resident of Loudoun?</label>
            <select name="resident" onChange={this.handleChangeResident}>
              <option value="T">Yes</option>
              <option value="F">No</option>
              </select> 
            <input type="submit" value="Submit" />
        </form>}
      </div>

  );
}


}

export default Signup;
