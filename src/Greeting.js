import React from 'react';


class Greeting extends React.Component {
    render() {
        return (
        <div className="Greeting">
                Click here to signup to be notified!
                <button id="signup" onClick={this.props.handler}>Click here!</button>
        </div>
    )
    }

  }

  export default Greeting;