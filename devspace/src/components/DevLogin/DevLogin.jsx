import './DevLogin.scss'
import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { LoginAuthAction } from "../../redux/actions/AuthAction";

const DevLogin = (props) => {
  const { login } = props;
  const { user } = props;
  const [loginState, setLoginState] = useState({ });
  
  const navigate = useNavigate();

  const [errorHandler, setErrorHandler] = useState({
    hasError: false,
    message: "",
  });

  const loggedIn = useSelector(state => state.isLoggedIn)
  
  console.log(loggedIn)
  useEffect(() => {
    const goToTimeline = () => navigate("/");
    if (loggedIn === true) {
      goToTimeline()
    }
  }, [navigate]);
    
  return (
          <div className="sign-in-container border">
            <div className="sign-in-header">
              <h4 className="font-weight-bold login__text">Developer Login</h4>
              <p className="sign-in-intro">
                Not a member? Register {" "}
                <span className="">
                  and find your dream role!{" "}
                </span>
              </p>
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                login(loginState, navigate, setErrorHandler);
                localStorage.setItem('email', event);
              }}
            >
              <div className="form-group">
                <label for="InputEmail">Email Address</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  onChange={(event) => {
                    const email = event.target.value;
                    setLoginState({ ...loginState, ...{ email } });
                    
                  }}
                />
                
              </div>
              <div className="form-group">
                <label for="InputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  onChange={(event) => {
                    const password = event.target.value;
                    setLoginState({ ...loginState, ...{ password } });
                  }}
                />
              </div>
              <button type="submit" className="btn auth__submit">
                Login
              </button>
              
            </form>
            {/* <img src={" google_icon "} /> */}
          </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (loginState, history, setErrorHandler) => {
      dispatch(LoginAuthAction(loginState, history, setErrorHandler));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DevLogin)