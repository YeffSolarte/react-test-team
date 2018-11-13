import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
// import { simpleAction } from '../../actions/simpleAction'

class Home extends Component {
  render() {
    return (
      <div>
          HOME
      </div>
    );
  }

  simpleAction = (event) => {
    this.props.simpleAction();
  }
}

const mapStateToProps = state => ({
    ...state
});
export default connect(mapStateToProps)(Home);
