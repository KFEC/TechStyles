import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import {
  Div,
  Button,
  ModalContent,
  CloseModalButton,
} from '../../../lib/styledComponents';
import { postData } from '../../../lib/index.js';

const NewAnswer = ({
  id, setDisplay, setUpdate2, update2, pName, qBody,
}) => {

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [failed, setFailed] = useState(false);

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
    const temp = [...photos];
    temp.push(URL.createObjectURL(e.target.files[0]));
    setPhotos(temp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!body.trim().length || !name.trim().length || !email.trim().length
      || !regEmail.test(email)) {
      setFailed(true);
      return;
    }
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
      setUpdate2(!update2);
    });
  };

  return (
    <ModalContent id="QAForm">
      {failed
      && (
        <ModalContent style={{
          zIndex: '5',
          margin: '5% auto',
          border: '1px solid black',
          width: '50%',
        }}
        >
          <CloseModalButton style={{ fontSize: '0.5em' }} type="submit" onClick={() => setFailed(false)}>
            <IoClose />
          </CloseModalButton>
          <div>
            <div>You must enter the following.</div>
            <div>Body</div>
            <div>Name</div>
            <div>Email</div>
            <div>Email must be formatted correctly</div>
          </div>
        </ModalContent>
      )}
      <CloseModalButton style={{ height: '1em' }} onClick={() => setDisplay(false)}><IoClose /></CloseModalButton>
      <div style={{ fontSize: '1.5em' }}>Submit your Answer</div>
      <div style={{ fontSize: '1.2em', maxWidth: '30ch' }}>{`${pName}: ${qBody}`}</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label id="answer-label" htmlFor="answer-body">
            Body*
          </label>
          <br />
          <textarea
            id="answer-body"
            maxLength="1000"
            style={{
              width: '20em',
              height: '8em',
              resize: 'none',
            }}
            value={body}
            onChange={changeBody}
          />
          <p />
          <label id="answer-label" htmlFor="answer-name">
            Name*
          </label>
          <br />
          <textarea
            id="answer-name"
            maxLength="60"
            style={{
              width: '20em',
              height: '3em',
              resize: 'none',
            }}
            placeholder="Example: jack543!"
            value={name}
            onChange={changeName}
          />
          <br />
          <span id="answer-warning">For privacy reasons, do not use your full name or email address</span>
          <p />
          <label id="answer-label" htmlFor="answer-email">
            Email*
          </label>
          <br />
          <textarea
            id="answer-email"
            maxLength="60"
            style={{
              width: '20em',
              height: '3em',
              resize: 'none',
            }}
            placeholder="Example: jack@email.com"
            value={email}
            onChange={changeEmail}
          />
          <br />
          <span id="answer-warning">For authentication reasons, you will not be emailed</span>
          <p />
          <label id="answer-label" htmlFor="answer-photos">
            Photos
          </label>
          <br />
          {photos.length <= 5 && (
            <input
              id="answer-photos"
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              multiple
              onChange={changePhotos}
            />
          )}
          {photos.length === 0
            ? ''
            : photos.map(photo => <img width={photo ? '100' : '0'} height={photo ? '100' : '0'} src={photo} alt="" />)}
        </div>
        <Button onClick={() => (
          !failed
          && regEmail.test(email)
        )
        && setDisplay(false)}
        >
          Submit
        </Button>
      </form>
    </ModalContent>
  );
};


export default NewAnswer;