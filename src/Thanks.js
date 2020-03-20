import React from 'react';
// import './Thanks.css';


class Thanks extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      submitted: false
  }
}

render() {
    return (
      <div className="Thanks">
          {this.props.err ?
            <div>It looks like that email is already in our list.
            </div> :
            <div>Thanks! We look forward to building the LoCo libertarian movement with your help!</div>}
         
      </div>
  );
}


}

export default Thanks;
