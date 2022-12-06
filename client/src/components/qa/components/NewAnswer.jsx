import React, { useState } from 'react';
import {
  Div,
  Button,
  ModalContent,
  CloseModalButton,
} from '../../../lib/styledComponents';
import { postData } from '../../../lib/index.js';

const NewAnswer = ({
  id, setDisplay, setUpdate, update,
}) => {

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  const regEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  const changeBody = (e) => {
    setBody(e.target.value);
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePhotos = (e) => {
    setPhotos([...photos, e.target.files[0].name]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Question Submited!');
    console.log({
      body, email, name, photos,
    });
    postData(`/qa/questions/${id}/answers`, {
      body,
      name,
      email,
      photos,
    }).then(() => {
      setBody('');
      setName('');
      setEmail('');
      setPhotos([]);
      setUpdate(!update);
    });
  };

  return (
    <ModalContent>
      <CloseModalButton onClick={() => setDisplay(false)}>❌</CloseModalButton>
      <h4>Add Answer</h4>
      <form onSubmit={handleSubmit}>
        <Div>
          <label htmlFor="answer-body">
            Body:
          </label>
          <br />
          <textarea
            id="answer-body"
            maxLength="1000"
            rows="5"
            cols="50"
            value={body}
            onChange={changeBody}
          />
          <p />
          <label htmlFor="answer-name">
            Name:
          </label>
          <input
            id="answer-name"
            maxLength="60"
            placeholder="Example: jack543!"
            value={name}
            onChange={changeName}
          />
          <br />
          <span>For privacy reasons, do not use your full name or email address</span>
          <p />
          <label htmlFor="answer-email">
            Email:
          </label>
          <input
            id="answer-email"
            maxLength="60"
            placeholder="Example: jack@email.com"
            value={email}
            onChange={changeEmail}
          />
          <br />
          <span>For authentication reasons, you will not be emailed</span>
          <p />
          <label htmlFor="answer-photos">
            Photos:
          </label>
          {photos.length <= 5 && (
            <input
              id="answer-photos"
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              multiple
              onChange={changePhotos}
            />
          )}
        </Div>
        <Button
          onClick={() => setDisplay(false)}
          disabled={
            !name.trim().length
            || !email.trim().length
            || !body.trim().length
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