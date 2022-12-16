import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IoClose } from 'react-icons/io5';
import {
  Div,
  Button,
  CloseModalButton,
} from '../../../lib/styledComponents';
import { FormModalContent, FormPopUpModalContent } from '../lib/qaStyledComponents';
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
      product_id: Number(id),
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
    <FormModalContent id="QA-Question" isDarkMode={isDarkMode} data-testid="test NewQuestion">
      {failed
      && (
        <FormPopUpModalContent
          isDarkMode={isDarkMode}
          style={{
            zIndex: '5',
            margin: '5% auto',
            border: '1px solid black',
          }}
        >
          {/* <CloseModalButton
            style={{ fontSize: '0.5em' }} type="submit" onClick={() => setFailed(false)}>
            <IoClose />
          </CloseModalButton> */}
          <div>
            <div>You must enter the following.</div>
            <div>Body</div>
            <div>Name</div>
            <div>Email</div>
            <div>Email must be formatted correctly</div>
          </div>
        </FormPopUpModalContent>
      )}
      <div style={{
        width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',
      }}
      >
        <CloseModalButton style={{ padding: 'none' }} onClick={() => setDisplay(false)}><IoClose style={{ fontSize: '1em', padding: 'none' }} /></CloseModalButton>
      </div>

      <div style={{ fontSize: '24px', paddingBottom: '5px' }}>Ask Your Question</div>
      <div style={{ fontSize: '16px', paddingBottom: '3px' }}>{`About the ${pName}`}</div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            {/* <label className="QA-label" htmlFor="question-body">
              Body*
            </label> */}
            <div className="QA-label">Body*</div>
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
              aria-label="Question Body"
            />
          </div>
          <div style={{ paddingTop: '10px' }}>
            {/* <label className="QA-label" htmlFor="question-name">
              Name*
            </label> */}
            <div className="QA-label">Name*</div>
            <textarea
              id="question-name"
              maxLength="60"
              style={{
                width: '20em',
                height: '3em',
                resize: 'none',
              }}
              placeholder="Example: jackson11!"
              aria-label="Question Name"
              value={name}
              onChange={changeName}
            />
            <br />
            <span className="QA-warning">For privacy reasons, do not use your full name or email address</span>
          </div>
          <div style={{ paddingTop: '10px' }}>
            {/* <label className="QA-label" htmlFor="question-email">
              Email*
            </label> */}
            <div className="QA-label">Email*</div>
            <textarea
              id="question-email"
              aria-label="Question Email"
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
            <span className="QA-warning">For authentication reasons, you will not be emailed</span>
          </div>
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
    </FormModalContent>
  );
};


export default NewQuestion;