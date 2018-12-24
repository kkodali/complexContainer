import React, { Component } from "react";
import "./App.css";
import ChildComp from "./components/childComponent";
import { connect } from "react-redux";
import { initializeState, setStep } from "./actions/actionStep";

class App extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      step: this.props.step,
    };
    this.callReset = this.callReset.bind(this);
    this.updateStep = this.updateStep.bind(this);
  }

  updateStep = async event => {
    event.preventDefault();
    if (this.props.step >= 2) {
      this.props.setStep(0);
    } else {
      this.props.setStep(this.props.step + 1);
    }
  };

  renderComponent() {
    switch (this.props.step) {
      case 0:
        return (
          <ChildComp
            childName={"Child 1: "}
            buttonName={"Click Meh"}
            controlFunc={this.updateStep}
          />
        );
      case 1:
        return (
          <ChildComp
            childName={"Child 2: "}
            buttonName={"Click Meh"}
            controlFunc={this.updateStep}
          />
        );
      case 2:
        return (
          <ChildComp
            childName={"Child 3: "}
            buttonName={"Click Meh"}
            controlFunc={this.updateStep}
          />
        );
      default:
        return (
          <ChildComp
            childName={"Child 1: "}
            buttonName={"Click Meh"}
            controlFunc={this.updateStep}
          />
        );
    }
  }

  callReset() {
    this.props.initializeState();
  }

  render() {
    console.log(this.props);
    return <div className="App">Parent Component {this.renderComponent()}</div>;
  }
}

const mapStateToProps = state => {
  return { step: state.step };
};

const mapDispatchToProps = dispatch => {
  return {
    initializeState: data => {
      dispatch(initializeState(data));
    },
    setStep: data => {
      dispatch(setStep(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
