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

const NewQuestion = ({
  pName, id, setDisplay, setUpdate, update,
}) => {

  const { isDarkMode } = useSelector((state) => state.productPage);

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!body.trim().length || !name.trim().length || !email.trim().length
      || !regEmail.test(email)) {
      setFailed(true);
      return;
    }

    postData('/qa/questions', {
      product_id: id,
      body,
      name,
      email,
    }).then(() => {
      setBody('');
      setName('');
      setEmail('');
      setUpdate(!update);
    });
  };

  return (
    <ModalContent id="QAForm" isDarkMode={isDarkMode} data-testid="test NewQuestion">
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
      <div style={{ fontSize: '1.5em' }}>Ask Your Question</div>
      <div style={{ fontSize: '1.2em' }}>{`About the ${pName}`}</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label id="answer-label" htmlFor="question-body">
            Body*
          </label>
          <br />
          <textarea
            id="question-body"
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
          <label id="answer-label" htmlFor="question-name">
            Name*
          </label>
          <br />
          <textarea
            id="question-name"
            maxLength="60"
            style={{
              width: '20em',
              height: '3em',
              resize: 'none',
            }}
            placeholder="Example: jackson11!"
            value={name}
            onChange={changeName}
          />
          <br />
          <span id="answer-warning">For privacy reasons, do not use your full name or email address</span>
          <p />
          <label id="answer-label" htmlFor="question-email">
            Email*
          </label>
          <br />
          <textarea
            id="question-email"
            maxLength="60"
            style={{
              width: '20em',
              height: '3em',
              resize: 'none',
            }}
            placeholder="Why did you like the product or not?"
            value={email}
            onChange={changeEmail}
          />
          <br />
          <span id="answer-warning">For authentication reasons, you will not be emailed</span>
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


export default NewQuestion;