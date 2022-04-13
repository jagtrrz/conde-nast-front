import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import { Context } from "../store/appContext";

export const Filters = () =>{
  const { store, actions } = useContext(Context);
  const [validated, setValidated] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } 
    setValidated(true);
    actions.setSendFilters()
    actions.getAllNews()
  }

  const changeQuery = (event) => {
    actions.setQueries({ ...store.queries, [event.target.name]: event.target.value });
  }

  return (
    <Form noValidate validated={validated} className="col-sm-12 col-lg-3" onSubmit = {(e) => {submitForm(e)}}>
      <Form.Group className="mb-3" controlId="validationCustom03">
        <Form.Label>Keyword</Form.Label>
        <Form.Control
          required
          type="text"
          name="q"
          defaultValue={store.queries.q}
          onChange={changeQuery}
          feedback="Error"
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid keyword.
        </Form.Control.Feedback>
      </Form.Group>
      {store.isAllNews 
        ? null
        : <Form.Group className="mb-3">
            <Form.Label>Select a Country</Form.Label>
            <Form.Control
              required
              as="select" 
              name="country" 
              defaultValue={store.queries.country} 
              onChange={changeQuery}>
                {store.countryOptions.map((item, index) => (
                  <option 
                    value={item.value}>
                      {item.name}
                  </option>
                ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select a country.
            </Form.Control.Feedback>
          </Form.Group>    
      }     
      <div  className="d-flex justify-content-end">
        <Button variant="info" type="submit">
            Submit
        </Button>
      </div>
    </Form>
  )
}

