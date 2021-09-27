import React from "react";
import { Spinner } from "react-bootstrap";

function withSpinner(Component, { status, type }) {
  const btnType =
    type === "button" ? "spinner-border-sm ml-1" : "spinner-border d-block m-2";

  return status === "loading" ? (
    <Spinner className={`${btnType}`} as="span" animation="border" />
  ) : (
    Component
  );
}

export default withSpinner;
