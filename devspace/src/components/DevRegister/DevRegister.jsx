import "./DevRegister.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { RegisterAuthAction } from "../../redux/actions/AuthAction";
import {
  TextField
} from "@material-ui/core"
import { StylesProvider } from "@material-ui/core/styles";

const DevRegister = (props) => {
  const navigate = useNavigate();
  const { user, register } = props;
  const [userState, setUserstate] = useState({});
  const [errorHandler, setErrorHandler] = useState({
    hasError: false,
    message: "",
  });

  return (
    <StylesProvider injectFirst>
      <div className="dev-container">
      <h3 className="font-weight-bold">Register As A Developer</h3>
      
      <form
        onSubmit={(event) => {
          event.preventDefault();
          register(userState, navigate, setErrorHandler);
        }}
      >
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              
              <TextField id="standard-basic" label="First Name" variant="standard" placeholder="John" onChange={(event) => {
                  const firstName = event.target.value;
                  setUserstate({ ...userState, ...{ firstName } });
                }} />
              {/* <input
                type="text"
                className="form-control"
                placeholder="First Name"
                onChange={(event) => {
                  const firstName = event.target.value;
                  setUserstate({ ...userState, ...{ firstName } });
                }}
              /> */}
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              
              <TextField id="standard-basic" label="Last Name" variant="standard" placeholder="Cena" onChange={(event) => {
                  const lastName = event.target.value;
                  setUserstate({ ...userState, ...{ lastName } });
                }} />
              {/* <input
                type="text"
                className="form-control "
                placeholder="Last Name"
                onChange={(event) => {
                  const lastName = event.target.value;
                  setUserstate({ ...userState, ...{ lastName } });
                }}
              /> */}
            </div>
          </div>
        </div>
        <div className="form-group">
          <TextField id="standard-basic" label="Email Address" variant="standard" placeholder="joncena@outlook.com" onChange={(event) => {
              const email = event.target.value;
              setUserstate({ ...userState, ...{ email } });
            }} />
          
        </div>
        <div className="form-group">
          
          <TextField id="standard-basic" label="Password" variant="standard" placeholder="Enter Password" onChange={(event) => {
              const password = event.target.value;
              setUserstate({ ...userState, ...{ password } });
            }} />
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
        <div className="sign-in-dev">
        Already a developer?
        <Link to="/login">
          <h6 className="sign-in-link">Login</h6>
        </Link>
      </div>
      </form>
    </div>
    </StylesProvider>
    
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
      dispatch(RegisterAuthAction(userState, history, setErrorHandler));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DevRegister);
