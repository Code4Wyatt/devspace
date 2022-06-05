import './Login.scss'
import { useState } from 'react'
import Nav from '../../components/Nav/Nav'
import DevLogin from '../../components/DevLogin/DevLogin'

const Login = () => {
  return (
      <>
          <Nav />
          <div className="login-container">
              <div>
                <DevLogin />
              </div>
              <div>

              </div>
          </div>
      </>
  )
}

export default Login