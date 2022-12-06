import React, { useEffect, useState } from 'react'
import { StyleSelector } from '../lib/styledOverview.js'

const StyleSelect = ({ styles }) => {
  const [styleName, setStyleName] = useState('')
  // console.log(styles[0]?.name)

  const handleClick = () => {
    console.log('new style should re-render')
    setStyleName(event.target.name)
  }

  const renderStyles = () => {
    return (
      <div id="styles">
        {styles.map((style, index) => {
        return <StyleSelector onClick={() => handleClick()} name={`${style.name}`} src={`${style.thumbnail}`} key={index}></StyleSelector>
        })}
      </div>
    )
  }

  return (
    <div id="style-selector">
    <div>STYLE > {styles.length && styleName.length > 0 ? styleName : styles[0]?.name}</div>
      {styles.length > 0 ? renderStyles() : null}
    </div>
  )
}

export default StyleSelect;

// MUFFIN BREAK BRB
// MUFFIN BREAK BRB
// MUFFIN BREAK BRB
// MUFFIN BREAK BRB
// MUFFIN BREAK BRB
// MUFFIN BREAK BRB