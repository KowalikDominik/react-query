import React, { useState } from "react";
import api from "../../services/api";

import { useQuery } from "react-query";
import withModal from "../withModal/withModal";
import withSpinner from "../withSpinner/withSpinner";
import CardOnList from "../CardOnList/CardOnList";
import queryConfig from "../../utilities/queryConfig";
import { Pagination } from "react-bootstrap";

function People() {
  const [page, setPage] = useState(1);
  const { data, status, isPreviousData } = useQuery(
    ["fetchPeople", "hello from people", page],
    api.getPeople,
    {
      ...queryConfig,
      onSuccess: () => console.log(`Success on People component`),
    }
  );
  const goPage = (direction) => {
    if (direction === "prev") setPage((old) => Math.max(old - 1, 1));
    else setPage((old) => old + 1);
  };
  console.log(`isPreviousData`, isPreviousData);
  console.log(`!Boolean(data?.next)`, !Boolean(data?.next));

  return (
    <>
      <Pagination>
        <Pagination.Prev
          disabled={isPreviousData || !Boolean(data?.previous)}
          onClick={() => goPage("prev")}
        />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next
          disabled={isPreviousData || !Boolean(data?.next)}
          onClick={() => goPage("next")}
        />
      </Pagination>
      {withModal(
        withSpinner(
          data?.results?.map((field, idx) => (
            <CardOnList
              key={idx}
              title={field.name}
              data={[
                {
                  name: "eye color",
                  value: field.eye_color,
                },
                {
                  name: "mass",
                  value: field.mass,
                },
                {
                  name: "birth year",
                  value: field.birth_year,
                },
              ]}
            />
          )),
          { status: isPreviousData ? "loading" : status }
        ),
        {
          status,
          type: "danger",
          msg: "Fetching error.",
        }
      )}
    </>
  );
}

export default People;
