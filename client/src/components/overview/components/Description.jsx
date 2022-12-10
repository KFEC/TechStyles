import React, { useState } from 'react';

const Description = ({ slogan, description, features }) => {
  const renderFeatures = () => {
    return (
      features.map((feature, index) => {
        return (<div className="feature" key={Math.random(index * 54) * 10}>{`${feature.feature} - ${feature.value}`}</div>);
      })
    );
  };

  return (
    <div id="description-features-container">
      <section id="slogan-description-container">
        <div id="slogan">{slogan}</div>
        <div id="description">{description}</div>
      </section>
      <div id="features-container">
        <div id="features-title">Features</div>
        {features !== undefined && features.length > 0 ? renderFeatures() : null}
      </div>
    </div>
  );
};

export default Description;