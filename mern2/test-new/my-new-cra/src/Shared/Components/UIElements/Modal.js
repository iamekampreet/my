import React from "react";

const Modal = (props) => {
  return (
    <div
      className="modal fade"
      id={props.id}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className={`modal-dialog modal-dialog-centered ${
          props.largeModal && "modal-lg"
        }`}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {props.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{props.content}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-info"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            {props.secondBtn && (
              <button
                type="button"
                className={`btn ${props.secondBtnColor}`}
                onClick={props.onClick}
              >
                {props.secondBtnText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
