import React from 'react'
import Nav from '../../components/Nav/Nav'
import DevRegister from '../../components/DevRegister/DevRegister'
import EmployerRegister from '../../components/EmployerRegister/EmployerRegister'
import './Register.scss'

const Register = () => {
  return (
      <>
          <Nav />
          <div className="register-container"> 
              <div className="div-section">
                  <DevRegister />
            </div>
              <div>
                 <EmployerRegister />
            </div>
          </div>
          
          
      </>
  )
}

export default Register