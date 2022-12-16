import React from 'react';
import { useSelector } from 'react-redux';
import {
  AppDiv, Wrapper, Div, Button,
} from '../lib/styledComponents';
import Logo from '../assets/fec-logo.png';

const About = () => {
  const { isDarkMode } = useSelector((state) => state.productPage);
  return (
    <AppDiv
      isDarkMode={isDarkMode}
      style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      }}
    >
      <Wrapper isDarkMode={isDarkMode}><img id="app-logo" src={Logo} alt="TechStyles" /></Wrapper>
      <h1 style={{
        fontSize: '5em', fontWeight: 'bolder', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1em 0 0.5em',
      }}
      >
        About Us
      </h1>
      <div style={{
        width: '75%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <div style={{
          textAlign: 'justify', padding: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        }}
        >
          <h1 style={{ fontSize: '3em' }}>Mo Akbari</h1>
          <h3 style={{ fontSize: '1em', padding: '0 0 1em 0.5em' }}>Team Manager</h3>
          <div>
            <img
              alt="about mo"
              src="https://avatars.githubusercontent.com/u/67610514?v=4"
              style={{
                width: '250px', height: '250px', float: 'left', padding: '1em',
              }}
            />
          </div>
          <p style={{ padding: '1em', textAlign: 'center', fontSize: '1.2em' }}>
            Mo the Prince of Coding, he originally discovered his passion for technology
            during the founding of his family business, Bosphorus Baklava. He didn&#39;t
            share the same passion as his family for baking, so to avoid early mornings,
            he pursued his career in computer science. As he progressed, his heart
            grew softer and softer, almost like sweet sweet baklava. Even though
            his heart is soft, his arms are strong and fiercely led the team through
            gruesome warfare against linter errors and webpack compiling blunders.
          </p>
        </div>
        <div style={{
          textAlign: 'justify', padding: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        }}
        >
          <h1 style={{ fontSize: '3em' }}>Madeline King</h1>
          <h3 style={{ fontSize: '1em', padding: '0 0 1em 0.5em' }}>Project Manager/Designer</h3>
          <div>
            <img
              alt="about madeline"
              src="https://avatars.githubusercontent.com/u/106297124?v=4"
              style={{
                width: '250px', height: '250px', float: 'left', padding: '1em',
              }}
            />
          </div>
          <p style={{ padding: '1em', textAlign: 'center', fontSize: '1.2em' }}>
            Madeline King is a young and hard working student on her path to becoming a fullstack
            software engineer. She crash landed at Hack Reactor after taking a corner going about
            90mph through the hills. Madeline is a motorcycle enthusiast who knows how to change
            her oil. After picking up the pieces of her motorcycle, she learned to construct pieces
            together using CSS. This connection has led her to excel in design and make great
            stylistic choices.
          </p>
        </div>
        <div style={{
          textAlign: 'justify', padding: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        }}
        >
          <h1 style={{ fontSize: '3em' }}>Robert Hu</h1>
          <h3 style={{ fontSize: '1em', padding: '0 0 1em 0.5em' }}>Code Architect</h3>
          <img
            alt="about robert"
            src="https://avatars.githubusercontent.com/u/52551319?v=4"
            style={{
              width: '250px', height: '250px', float: 'left', padding: '1em',
            }}
          />
          <p style={{ padding: '1em', textAlign: 'center', fontSize: '1.2em' }}>
            Robert Hu is a up and coming software engineer who started this journey
            by attending University of California, Santa Cruz. His major was computer science,
            and his passion for software engineering is inherited from his parents who are both
            software engineers by trade. Growing up, he has watched their careers flourish,
            and it inspired him to follow suit and go down the same career path. Robert Hu has
            found great success on his journey thus far. On this project, Robert has acted
            as our lead code architect, and is one of our four founding engineers.
          </p>
        </div>
        <div style={{
          textAlign: 'justify', padding: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        }}
        >
          <h1 style={{ fontSize: '3em' }}>Simon Buret de Longagne</h1>
          <h3 style={{ fontSize: '1em', padding: '0 0 1em 0.5em' }}>Product Manager</h3>
          <div>
            <img
              alt="about simon"
              src="https://avatars.githubusercontent.com/u/99362878?v=4"
              style={{
                width: '250px', height: '250px', float: 'left', padding: '1em',
              }}
            />
          </div>
          <p style={{ padding: '1em', textAlign: 'center', fontSize: '1.2em' }}>
            Simon was born and raised Belgium, he has lived in various countries including Belarus
            and grew up with a passion for music. He dedicated most of his life to this passion
            and learning various instruments along the way. He has previously worked as a music
            director for musical theater productions, and as a teacher, teaching students the
            art of music. Simon was inspired by his friends, peers, and most importantly, his wife
            to begin his career as a software engineer. Simon decided to attend Hack Reactor
            and uproot his life as a music director to please his wife. His skills have flourished
            through hard work and persistence throughout Project TechStyles.
          </p>
        </div>
      </div>
    </AppDiv>
  );
};

export default About;
