import React from 'react'
import './button.scss'

// const STYLES = ['button--full'];


const SubmitBtn = ({text, cname}) => {
  return (
    <>
        <input type='submit' className={`button ${cname}`} value={text}></input>
    </>
  )
}

export default SubmitBtn