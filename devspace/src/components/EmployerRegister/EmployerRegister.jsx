import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { RegisterEmployerAuthAction } from "../../redux/actions/AuthAction";
import "./EmployerRegister.scss";

const EmployerRegister = (props) => {
  const navigate = useNavigate();
  const { user, register } = props;
  const [userState, setUserstate] = useState({});
  const [errorHandler, setErrorHandler] = useState({
    hasError: false,
    message: "",
  });

  return (
    <div className="employer-container">
      <h3 className="font-weight-bold">Register As An Employer</h3>
      <div className="sign-in-employer">
        Already a member?
        <Link to="/login">
          <h6 className="sign-in-link">Sign In</h6>
        </Link>
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
              <label htmlFor="InputFirstName" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Company Name"
                onChange={(event) => {
                  const companyName = event.target.value;
                  setUserstate({ ...userState, ...{ companyName } });
                }}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <label htmlFor="InputEmail" className="form-label">
                Contact Name
              </label>
              <input
                type="text"
                className="form-control "
                placeholder="Enter Recruiter Contact Name"
                onChange={(event) => {
                  const contactName = event.target.value;
                  setUserstate({ ...userState, ...{ contactName } });
                }}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="InputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            placeholder="Email address"
            className="form-control"
            onChange={(event) => {
              const email = event.target.value;
              setUserstate({ ...userState, ...{ email } });
            }}
          />
          <small id="emailHelp" className="sub-text">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="InputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            onChange={(event) => {
              const password = event.target.value;
              setUserstate({ ...userState, ...{ password } });
            }}
          />
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
        {/* <div className="login-social-media py-3">
          <button className="btn btn-primary btn-block btn-sm">
            Continue with Google
          </button>
        </div> */}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (userState, history, setErrorHandler) => {
      dispatch(RegisterEmployerAuthAction(userState, history, setErrorHandler));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployerRegister);
