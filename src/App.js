import React from 'react';
import logo from './images/lp_logo_small.png';
import lplcLogo from './images/lplc.png';
import './App.css';
import Signup from './Signup';
import Greeting from './Greeting.js';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      signup: false
    }
    this.signupHandler = this.signupHandler.bind(this)
  }

  signupHandler() {
    this.setState({
      signup: true
    })
  }

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={lplcLogo} className="App-logo" alt="logo" />
            <h3>
              Coming soon!
            </h3>
          </header>
          {this.state.signup ? <Signup /> : <Greeting handler = {this.signupHandler} />}
      </div>
    );
  }


}

export default App;
