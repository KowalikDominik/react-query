import React from "react";
import CModal from "../CModal/CModal";

function withModal(Component, { status, type, msg }) {
  return status === "error" ? <CModal type={type} msg={msg} /> : Component;
}

export default withModal;
