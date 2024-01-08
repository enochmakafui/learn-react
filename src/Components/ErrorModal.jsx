import React from "react";
import ReactDOM from "react-dom";
import "./ErrorModal.css";
import Button from "./Button";

const BackDrop = (props) => {
  return <div className="backdrop" onClick={props.errorHandler} ></div>;
};

const Modal = (props) => {
  return (
    <div className="modal">
      <h1 className="modal-title">{props.title}</h1>
      <p>{props.message}</p>
      <Button btnType="modal-btn" onClick={props.errorHandler}>
        Okay
      </Button>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
     
      {
        ReactDOM.createPortal(
          <BackDrop errorHandler={props.errorHandler} />,
          document.getElementById("backdrop-root")
        )
      }
      {
        ReactDOM.createPortal(
          <Modal
            title={props.title}
            message={props.message}
            errorHandler={props.errorHandler}
          />,
          document.getElementById("overlay-root")
        )
      }
    </React.Fragment>
  );
};

export default ErrorModal;
