import React from 'react';


class Greeting extends React.Component {
    render() {
        return (
        <div className="Greeting">
                Sign up to be notified of any LPLC news/events!<br /><br />
                <button id="signup" onClick={this.props.handler}>Click here!</button>
        </div>
    )
    }

  }

  export default Greeting;