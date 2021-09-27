import React, { useState } from "react";

import "./ContentNav.css";
import { Nav } from "react-bootstrap";

function ContentNav({ page }) {
  const [active, setActive] = useState("planets");

  const handleSelect = (eventKey) => setActive(eventKey);

  return (
    <Nav
      variant="pills"
      className="border-0 pb-2"
      activeKey={active}
      onSelect={handleSelect}
    >
      <Nav.Item>
        <Nav.Link
          className="rounded-pill"
          eventKey="planets"
          onClick={() => page("planets")}
        >
          Planets
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className="rounded-pill"
          eventKey="people"
          onClick={() => page("people")}
        >
          People
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className="rounded-pill"
          eventKey="invalid"
          onClick={() => page("invalid")}
        >
          Fake url
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className="rounded-pill"
          eventKey="update"
          onClick={() => page("update")}
        >
          Update method
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default ContentNav;
