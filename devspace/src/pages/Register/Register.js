import React from 'react'
import Nav from '../../components/Nav/Nav'
import DevLogin from '../../components/DevLogin/DevLogin'
import EmployerLogin from '../../components/EmployerLogin/EmployerLogin'
import './Register.scss'

const Register = () => {
  return (
      <>
          <Nav />
          <div className="register-container"> 
              <div className="div-section">
                  <DevLogin />
            </div>
              <div>
                 <EmployerLogin />
            </div>
          </div>
          
          
      </>
  )
}

export default Register