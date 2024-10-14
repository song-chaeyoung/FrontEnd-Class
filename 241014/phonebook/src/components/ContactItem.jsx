import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px 0;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.div``;

const Number = styled.div``;

const ContactItem = ({ contactItem }) => {
  return (
    <Wrapper>
      <Row>
        <Col lg={2}>
          <Img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
            alt="userImg"
          />
        </Col>
        <Col lg={10}>
          <Name>{contactItem.name}</Name>
          <Number>{contactItem.phone}</Number>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ContactItem;
