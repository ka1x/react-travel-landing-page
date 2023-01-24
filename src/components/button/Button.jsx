import React from 'react'
import './button.css'

const SubmitBtn = ({text}) => {
  return (
    <>
        <input type='submit' className="button" value={text}></input>
    </>
  )
}

export default SubmitBtn