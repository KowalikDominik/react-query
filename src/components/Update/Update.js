import React, { useState, useRef } from "react";
import { Form, Button, Spinner, Badge } from "react-bootstrap";
import { useMutation } from "react-query";
import api from "../../services/api";
import withSpinner from "../withSpinner/withSpinner";
function Update() {
  const { mutate, data, isLoading } = useMutation(api.putId);
  const inputRef = useRef();

  const update = (e) => {
    e.preventDefault(e);
    mutate(Math.max(Number(inputRef.current.value), 1));
  };

  console.log(data);
  console.log(isLoading);

  return (
    <div>
      <Form onSubmit={update}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            New Id
            <Button variant="primary">
              Actual id from api:<Badge variant="light">{data?.id}</Badge>
            </Button>
          </Form.Label>
          {withSpinner(
            <Form.Control ref={inputRef} type="text" placeholder="New id" />,
            {
              status: isLoading && "loading",
            }
          )}
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isLoading}>
          Update
          {withSpinner(<></>, {
            status: isLoading && "loading",
            type: "button",
          })}
        </Button>
      </Form>
      <Button variant="primary" disabled>
        <Spinner as="span" animation="border" size="sm" />
        <span className="sr-only">Loading...</span>
      </Button>{" "}
    </div>
  );
}

export default Update;
