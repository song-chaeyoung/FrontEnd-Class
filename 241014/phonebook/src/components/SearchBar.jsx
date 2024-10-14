import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const searchByName = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH", payload: { keyword: keyword } });
  };

  return (
    <Form onSubmit={searchByName}>
      <Row>
        <Col lg={10}>
          <Form.Control
            type="text"
            placeholder="Search Name"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col lg={1}>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;
