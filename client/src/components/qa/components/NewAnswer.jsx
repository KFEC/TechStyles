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

  const regEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

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
      <h4>Add Answer</h4>
      <form onSubmit={handleSubmit}>
        <Div>
          <label htmlFor="answer-body">
            Body:
          </label>
          <textarea
            id="answer-body"
            maxLength="1000"
            rows="5"
            cols="50"
            value={body}
            onChange={e => setBody(e.target.value.trim())}
          />
        </Div>
        <Div>
          <label htmlFor="answer-name">
            Name:
          </label>
          <input
            id="answer-name"
            maxLength="60"
            placeholder="Example: jack543!"
            value={name}
            onChange={e => setName(e.target.value.trim())}
          />
        </Div>
        <p>For privacy reasons, do not use your full name or email address</p>
        <Div>
          <label htmlFor="answer-email">
            Email:
          </label>
          <input
            id="answer-email"
            maxLength="60"
            placeholder="Example: jack@email.com"
            value={email}
            onChange={e => setEmail(e.target.value.trim())}
          />
        </Div>
        <p>For authentication reasons, you will not be emailed</p>
        <Div>
          <label htmlFor="answer-photos">
            Photos:
          </label>
          {photos.length <= 5 && (
            <input
              id="answer-photos"
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              multiple
              onChange={e => setPhotos([...photos, e.target.files[0].name])}
            />
          )}
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


export default NewAnswer;