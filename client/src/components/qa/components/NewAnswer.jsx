import React, { useState } from 'react';
import {
  Div,
  Button,
  ModalContent,
  CloseModalButton,
} from '../../../lib/styledComponents';

const NewAnswer = ({ setDisplay }) => {

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  const resetStates = () => {
    setBody('');
    setName('');
    setEmail('');
    setPhotos([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Question Submited!');
    console.log({
      body, email, name, photos,
    });
    resetStates();
  };

  return (
    <ModalContent>
      <CloseModalButton type="submit" onClick={() => setDisplay(false)}>X</CloseModalButton>
      <h2>Add Answer</h2>
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
            placeholder="Example: jack543!"
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
            placeholder="Example: jack@email.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {email}
        </Div>
        <p>For authentication reasons, you will not be emailed</p>
        <Div>
          <label
            id="new-question-photos-label"
            htmlFor="new-question-photos-input"
          >
            Photos:
          </label>
          {photos.length <= 5 && (
            <input
              type="file"
              id="new-question-photos-input"
              onChange={e => setPhotos([...photos, e.target.files[0].name])}
            />
          )}
        </Div>
        <Button
          onClick={() => setDisplay(false)}
          disabled={
            !name.trim().length
            || !email.trim().length
            || !body.trim().length
          }
        >
          Submit
        </Button>
      </form>
    </ModalContent>
  );
};


export default NewAnswer;