import React from 'react'
import './logo.scss'

const Logo = ({type}) => {
  return (
	 <h3 className={`logo ${type}`}>TRAVEL <span>=</span></h3>
  )
}

export default Logo