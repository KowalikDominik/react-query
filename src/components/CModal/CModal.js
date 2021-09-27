import React, { useState } from "react";
import { Toast } from "react-bootstrap";

function CModal({ type, msg }) {
  const [show, setShow] = useState(true);
  return (
    show && (
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          top: "0",
          left: "0",
          margin: "10px 0",
          minHeight: "200px",
          width: "100vw",
        }}
      >
        <div
          style={{
            position: "relative",
            minWidth: "300px",
          }}
        >
          <Toast
            onClose={() => setShow(false)}
            show={show}
            transition={false}
            delay={2000}
            autohide
            className="text-dark border-0"
          >
            <Toast.Header className={`bg-${type} text-white`}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">{type}</strong>
            </Toast.Header>
            <Toast.Body>
              <strong>{msg}</strong>
            </Toast.Body>
          </Toast>
        </div>
      </div>
    )
  );
}

export default CModal;
