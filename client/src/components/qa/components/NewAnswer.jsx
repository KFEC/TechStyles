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

  // eslint-disable-next-line no-undef
  // const upload = cloudinary.createUploadWidget(
  //   {
  //     cloudName: 'dmv4johjt',
  //     uploadPreset: 'm3vjreqx',
  //     maxFiles: 5,
  //     sources: ['local', 'url'],
  //     multiple: true,
  //   },
  //   (error, result) => {
  //     if (!error && result && result.event === 'success') {
  //       const temp = [...photos];
  //       temp.push(result.info.secure_url);
  //       setPhotos(temp);
  //     }
  //   },
  // );

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
    <FormModalContent id="QA-Answer" isDarkMode={isDarkMode} data-testid="test NewAnswer">
      {failed
      && (
        <FormPopUpModalContent
          isDarkMode={isDarkMode}
          style={{
            zIndex: '5',
            margin: '5% auto',
            border: '1px solid black',
            width: '50%',
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
        <CloseModalButton type="submit" style={{ padding: 'none' }} onClick={() => setDisplay(false)}><IoClose style={{ fontSize: '1em', padding: 'none' }} /></CloseModalButton>
      </div>
      <div style={{ fontSize: '24px', paddingBottom: '5px' }}>Submit your Answer</div>
      <div style={{ fontSize: '16px', paddingBottom: '3px' }}>{`${pName}: ${qBody}`}</div>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label className="QA-label" htmlFor="answer-body">
            Body*
          </label> */}
          <div className="QA-label">Body*</div>
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
        </div>
        <div style={{ paddingTop: '10px' }}>
          {/* <label id="answer-name-label" htmlFor="answer-name">
            Name*
          </label> */}
          <div className="QA-label">Name*</div>
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
          <span className="QA-warning">For privacy reasons, do not use your full name or email address</span>
        </div>
        <div style={{ paddingTop: '10px' }}>
          {/* <label className="QA-label" htmlFor="answer-email">
            Email*
          </label> */}
          <div className="QA-label">Email*</div>
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
          <span className="QA-warning">For authentication reasons, you will not be emailed</span>
        </div>
        <div style={{ paddingTop: '10px' }}>
          {/* <label className="QA-label" htmlFor="answer-photos">
            Photos
          </label> */}
          <div className="QA-label">Photos*</div>
          {/* {photos.length < 5 && (
            <button type="button" onClick={() => upload.open()}>Upload</button>
          )} */}
          {photos.length < 5 && (
            <input
              id="answer-photos"
              name="answer-photos"
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              multiple
              onChange={changePhotos}
            />
          )}
          <div style={{ width: '400px', overflow: 'hidden' }}>
            {photos.length === 0
              ? ''
              : photos.map((photo, ind) => <img key={Math.random(ind * 54) * 10} style={{ padding: '5px' }} width={photo ? '100' : '0'} height={photo ? '100' : '0'} src={photo} alt="new review" />)}
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


export default NewAnswer;