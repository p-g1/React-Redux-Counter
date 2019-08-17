import React, { Component } from 'react';
import { connect } from 'react-redux';

const containerStyle = {
  display: 'flex'
}
const buttonStyle = {
  fontSize: '1.5rem',
  width: '40px',
  height: '40px'
}

const mapStateToProps = state => {
    return {
        number: state.number
    };
}

class Counter extends Component {

    addOne = () => {
        this.props.dispatch({ type: 'ADD_ONE' });
    }

    minusOne = () => {
        this.props.dispatch({ type: 'MINUS_ONE' });
    }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1>{this.props.number}</h1>
          <div style={containerStyle}>
            <button type="button" onClick={this.minusOne} style={buttonStyle}>-</button>
            <button type="button" onClick={this.addOne} style={buttonStyle}>+</button>
          </div>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Counter);