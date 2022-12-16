import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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

  const { isDarkMode } = useSelector((state) => state.productPage);

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
    <ModalContent id="QA-Answer" isDarkMode={isDarkMode} data-testid="test NewAnswer">
      {failed
      && (
        <ModalContent
          isDarkMode={isDarkMode}
          style={{
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
          {/* <label className="answer-label" htmlFor="answer-body">
            Body*
          </label> */}
          <div className="answer-label">Body*</div>
          <textarea
            id="answer-body"
            name="answer-body"
            maxLength="1000"
            style={{
              width: '20em',
              height: '8em',
              resize: 'none',
            }}
            value={body}
            onChange={changeBody}
          />
          <br />
          <p />
          {/* <label id="answer-name-label" htmlFor="answer-name">
            Name*
          </label> */}
          <div className="answer-label">Name*</div>
          <br />
          <textarea
            id="answer-name"
            aria-label="answer-name"
            name="answer-name"
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
          <span className="answer-warning">For privacy reasons, do not use your full name or email address</span>
          <p />
          {/* <label className="answer-label" htmlFor="answer-email">
            Email*
          </label> */}
          <div className="answer-label">Email*</div>
          <br />
          <textarea
            id="answer-email"
            name="answer-email"
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
          <span className="answer-warning">For authentication reasons, you will not be emailed</span>
          <p />
          {/* <label className="answer-label" htmlFor="answer-photos">
            Photos
          </label> */}
          <div className="answer-label">Photos*</div>
          <br />
          {photos.length <= 5 && (
            <input
              id="answer-photos"
              name="answer-photos"
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              multiple
              onChange={changePhotos}
            />
          )}
          {photos.length === 0
            ? ''
            : photos.map(photo => <img width={photo ? '100' : '0'} height={photo ? '100' : '0'} src={photo} alt="new review" />)}
        </div>
        <Button
          isDarkMode={isDarkMode}
          onClick={() => (
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