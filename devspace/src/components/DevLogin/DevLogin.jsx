import './DevLogin.scss'
import React from 'react'

const DevLogin = () => {
  return (
      <div className="dev-container">
          <h3>Register As A Developer</h3>
          <form>
              <input type="text" className="form-control" placeholder="First Name"/>
              <input type="text" className="form-control" placeholder="Last Name"/>
              <input type="text" className="form-control" placeholder="Email"/>
              <input type="text" className="form-control" placeholder="Password"/>
          </form>
      </div>
  )
}

export default DevLogin