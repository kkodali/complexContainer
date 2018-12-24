import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setStep } from "./actionStep";

class Child1 extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      step: this.props.step
    };
    this.udpateStep = this.udpateStep.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
  // }
  // componentDidUpdate() {
  //   // if(this.)
  // }

  udpateStep = async event => {
    event.preventDefault();
    let stepnum = this.state.step + 1;
    this.setState({
      step: stepnum
    });
    this.props.setStep(stepnum);
  };

  render() {
    // console.log(this.state);
    console.log(this.props);
    return (
      <div>
        <span>Child 1: </span>
        <button onClick={this.udpateStep}>Click meh</button>
      </div>
    );
  }
}

Child1.propTypes = {
  step: PropTypes.number,
  onChange: PropTypes.func
};


const mapStateToProps = state => {
  return { step: state.step };
};

// export default Child1;
function mapDispatchToProps(dispatch) {
  return {
    setStep: data => {
      dispatch(setStep(data));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Child1);
