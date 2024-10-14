import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [info, setInfo] = useState({
    name: "",
    phone: "",
  });

  const dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name: info.name, phone: info.phone },
    });
  };

  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="forPhoneNum">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Number"
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Creator
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
