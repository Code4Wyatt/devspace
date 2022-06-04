import './DevLogin.scss'
import React, { useState } from 'react'
import { connect } from "react-redux"
import { useNavigate } from "react-router"
import { RegisterAuthAction } from "../../redux/actions/AuthAction";

const DevLogin = (props) => {
    const navigate = useNavigate()
    const { user, register } = props;
    const [userState, setUserstate] = useState({});
    const [errorHandler, setErrorHandler] = useState({
    hasError: false,
    message: "",
  });

  return (
      <div className="dev-container">
          
              <h3 className="font-weight-bold">Register As A Developer</h3>
            <div className="sign-in-header">
              <p className="sign-in-intro">
                Already a member?   
                <a href="/" className="links"><span className="text-danger font-weight-bold"> Sign In</span></a>
                
              </p>
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                register(userState, navigate, setErrorHandler);
              }}
            >
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="InputEmail">First Name</label>
                    <input
                      type="text"
                      className="form-control form-control-sm inputs"
                      placeholder="First Name"
                      onChange={(event) => {
                        const firstName = event.target.value;
                        setUserstate({ ...userState, ...{ firstName } });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="InputEmail">Last Name</label>
                    <input
                      type="text"
                      className="form-control form-control-sm inputs"
                      placeholder="Last Name"
                      onChange={(event) => {
                        const lastName = event.target.value;
                        setUserstate({ ...userState, ...{ lastName } });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="form-control form-control-sm inputs"
                  onChange={(event) => {
                    const email = event.target.value;
                    setUserstate({ ...userState, ...{ email } });
                  }}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="InputPassword1">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control form-control-sm inputs"
                  onChange={(event) => {
                    const password = event.target.value;
                    setUserstate({ ...userState, ...{ password } });
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-danger btn-sm auth__submit"
              >
                Submit
              </button>
              <div className="login-social-media py-3">
                <button className="btn btn-primary btn-block btn-sm">
                  Continue with Google
                </button>
              </div>
            </form>
       
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (userState, history, setErrorHandler) => {
      dispatch(RegisterAuthAction(userState, history, setErrorHandler));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DevLogin)