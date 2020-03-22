import React from 'react';
import './Greeting.css';


class Greeting extends React.Component {
    render() {
        return (
        <div className="Greeting">
            The Loudoun County LP Committee is preparing for a big year in 2020.
            <br />
            Sign up for our email list to stay notified of news and events.<br /><br />
            <button id="signup" onClick={this.props.handler}>Sign Up</button>
        </div>
    )
    }

  }

  export default Greeting;