import React from 'react'
import header from '../header.png'

const Header = () => {
  return (
    <div className="container">
      <header className="mt-4">
        <div className="reverse-wrapp my-4">
          <div className=" col py-5 px-3">
            <h1 className="fw-bold text-fourth pt-5">Online Experiences</h1>
            <p className="text-sm py-4">Find unique activities led by one-of-a-kind hosts — all without leaving home.</p>
          </div>
          <div className="col-md-8 curved-border">
            <img src={header} alt="violin" className="cover-image" />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
