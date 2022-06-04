import React from 'react'
import './EmployerLogin.scss'

const EmployerLogin = () => {
  return (
    <div className="employer-container">
          <h3>Register As An Employer</h3>
          <form>
              <input type="text" className="form-control" placeholder="Company Name"/>
              <input type="text" className="form-control" placeholder="Company Contact"/>
              <input type="text" className="form-control" placeholder="Email"/>
              <input type="text" className="form-control" placeholder="Password"/>
          </form>
      </div>
  )
}

export default EmployerLogin