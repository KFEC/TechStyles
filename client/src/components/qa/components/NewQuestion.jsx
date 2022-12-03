import React, { useState } from 'react';
import { Div, Button } from '../../../lib/styledComponents';

const NewQuestion = () => {

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const resetStates = () => {
    setBody('');
    setName('');
    setEmail('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Question Submited!');
    console.log({ body, email, name });
    resetStates();
  };

  return (
    <Div>
      I am NewQuestion
      <form onSubmit={handleSubmit}>
        <Div>
          <label
            id="new-question-body-label"
            htmlFor="new-question-body-input"
          >
            Body:
          </label>
          <textarea
            id="new-question-body-input"
            maxLength="1000"
            rows="5"
            cols="50"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
          {body}
        </Div>
        <Div>
          <label
            id="new-question-name-label"
            htmlFor="new-question-name-input"
          >
            Name:
          </label>
          <input
            id="new-question-name-input"
            maxLength="60"
            placeholder="Example: jackson11!"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {name}
        </Div>
        <p>For privacy reasons, do not use your full name or email address</p>
        <Div>
          <label
            id="new-question-email-label"
            htmlFor="new-question-email-input"
          >
            Email:
          </label>
          <input
            id="new-question-email-input"
            maxLength="60"
            placeholder="Why did you like the product or not?"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {email}
        </Div>
        <p>For authentication reasons, you will not be emailed</p>
        <Button
          disabled={
            !name.trim().length
            || !email.trim().length
            || !body.trim().length
          }
        >
          Submit
        </Button>
      </form>
    </Div>
  );
};


export default NewQuestion;