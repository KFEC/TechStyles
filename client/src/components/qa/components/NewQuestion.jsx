import React, { useState } from 'react';
import {
  Div,
  Button,
  ModalContent,
  CloseModalButton,
} from '../../../lib/styledComponents';
import { postData } from '../../../lib/index.js';

const NewQuestion = ({ setDisplay }) => {

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const regEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  const changeBody = (e) => {
    setBody(e.target.value.trim());
  };

  const changeName = (e) => {
    setName(e.target.value.trim());
  };

  const changeEmail = (e) => {
    setEmail(e.target.value.trim());
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Question Submited!');
    console.log({ body, email, name });
    setBody('');
    setName('');
    setEmail('');
  };

  return (
    <ModalContent>
      <CloseModalButton onClick={() => setDisplay(false)}>❌</CloseModalButton>
      <h4>Add Question</h4>
      <form onSubmit={handleSubmit}>
        <Div>
          <label htmlFor="question-body">
            Body:
          </label>
          <br />
          <textarea
            id="question-body"
            maxLength="1000"
            rows="5"
            cols="50"
            value={body}
            onChange={changeBody}
          />
          <p />
          <label htmlFor="question-name">
            Name:
          </label>
          <input
            id="question-name"
            maxLength="60"
            placeholder="Example: jackson11!"
            value={name}
            onChange={changeName}
          />
          <br />
          <span>For privacy reasons, do not use your full name or email address</span>
          <p />
          <label htmlFor="question-email">
            Email:
          </label>
          <input
            id="question-email"
            maxLength="60"
            placeholder="Why did you like the product or not?"
            value={email}
            onChange={changeEmail}
          />
          <br />
          <span>For authentication reasons, you will not be emailed</span>
        </Div>
        <Button
          onClick={() => setDisplay(false)}
          disabled={
            !name.length
            || !email.length
            || !body.length
            || !regEmail.test(email)
          }
        >
          Submit
        </Button>
      </form>
    </ModalContent>
  );
};


export default NewQuestion;