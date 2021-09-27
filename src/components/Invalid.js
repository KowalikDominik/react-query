import React from "react";
import { useQuery } from "react-query";
import api from "../services/api";
import withModal from "./withModal/withModal";
import withSpinner from "./withSpinner/withSpinner";
import queryConfig from "../utilities/queryConfig";

function Invalid() {
  const { status } = useQuery("fetchFake", api.getFake, queryConfig);

  return withModal(withSpinner(<>Fake url</>, { status }), {
    status,
    type: "danger",
    msg: "Fetching error.",
  });
}

export default Invalid;
