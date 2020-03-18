import React from 'react';
import './Signup.css';


class Signup extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      submitted: false
  }

  this.handleChangeEmail = this.handleChangeEmail.bind(this);
  this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
  this.handleChangeLastName = this.handleChangeLastName.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

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

handleSubmit(e) {
  e.preventDefault();

  fetch('https://api.virginiaelects.com/lploudoun/first/' + this.state.firstName + '/last/' + this.state.lastName + '/email/' + this.state.email, {
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain',
  }
})

  this.setState({submitted: true});
  console.log(
    'Email: ' + this.state.email + '\n' +
    'First name: ' + this.state.firstName + '\n' +
    'Last name: ' + this.state.lastName + '\n' +
    'Submitted: ' + this.state.submitted)
}

render() {
    return (
      <div className="Signup">
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChangeFirstName}></input>
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChangeLastName}></input>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email"  value={this.state.email} onChange={this.handleChangeEmail}></input>
            <input type="submit" value="Submit" />
        </form>
      </div>
  );
}


}

export default Signup;
