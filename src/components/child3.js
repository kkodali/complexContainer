<<<<<<< HEAD
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setStep } from "./actionStep";

class Child3 extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      step: this.props.step
    };
    this.udpateStep = this.udpateStep.bind(this);
  }

  udpateStep = async event => {
    event.preventDefault();
    // if (this.state.step === 2) {
      let stepnum = 0;
      this.setState({
        step: stepnum
      });
    // }
      this.props.setStep(0);
  };
  render() {
    // console.log(this.state);
    console.log(this.props);
    return (
      <div>
        <span>Child 3: </span>
        <button onClick={this.udpateStep}>Click meh</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { step: state.step };
};

// export default Child3;
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
)(Child3);
=======
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setStep } from "./actionStep";

class Child3 extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      step: this.props.step
    };
    this.udpateStep = this.udpateStep.bind(this);
  }

  udpateStep = async event => {
    event.preventDefault();
    // if (this.state.step === 2) {
      let stepnum = 0;
      this.setState({
        step: stepnum
      });
    // }
      this.props.setStep(0);
  };
  render() {
    // console.log(this.state);
    console.log(this.props);
    return (
      <div>
        <span>Child 3: </span>
        <button onClick={this.udpateStep}>Click meh</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { step: state.step };
};

// export default Child3;
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
)(Child3);
>>>>>>> ac9b403bd212644d3a86ebbf35eff29c408d9e87
