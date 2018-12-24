<<<<<<< HEAD
import React from "react";
import PropTypes from "prop-types";

const ChildComp = props => (
  <div>
    <span>{props.childName}</span>
    <button onClick={props.controlFunc}>{props.buttonName}</button>
  </div>
);

ChildComp.propTypes = {
  step: PropTypes.number,
  childName: PropTypes.string,
  controlFunc: PropTypes.func,
  buttonName: PropTypes.string
};

export default ChildComp;
=======
import React from "react";
import PropTypes from "prop-types";

const ChildComp = props => (
  <div>
    <span>{props.childName}</span>
    <button onClick={props.controlFunc}>{props.buttonName}</button>
  </div>
);

ChildComp.propTypes = {
  step: PropTypes.number,
  childName: PropTypes.string,
  controlFunc: PropTypes.func,
  buttonName: PropTypes.string
};

export default ChildComp;
>>>>>>> ac9b403bd212644d3a86ebbf35eff29c408d9e87
