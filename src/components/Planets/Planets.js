import React from "react";
import api from "../../services/api";

import { useQuery } from "react-query";
import withModal from "../withModal/withModal";
import withSpinner from "../withSpinner/withSpinner";
import CardOnList from "../CardOnList/CardOnList";
import queryConfig from "../../utilities/queryConfig";

function Planets() {
  const { data, status } = useQuery(
    "fetchPlanets",
    api.getPlanets,
    queryConfig
  );

  return withModal(
    withSpinner(
      data?.results.map((field, idx) => (
        <CardOnList
          key={idx}
          title={field.name}
          data={[
            {
              name: "population",
              value: field.population,
            },
            {
              name: "climate",
              value: field.climate,
            },
          ]}
        />
      )),
      { status }
    ),
    { status, type: "danger", msg: "Fetching error." }
  );
}

export default Planets;
