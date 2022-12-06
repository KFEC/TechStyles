import React, { useState, useEffect } from 'react'

const ImageGallery = ({ gallery }) => {

  const renderGallery = () => {
    return (
      <div>
        {gallery.map((image, index) => {
          return <img src={`${image}`} key={index}></img>
        })}
      </div>
    )
  }

  return (
    <div id="img-gallery">
      {gallery.length > 0 ? renderGallery() : null}
    </div>
  )
}

export default ImageGallery;