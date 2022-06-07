import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { RegisterEmployerAuthAction } from "../../redux/actions/AuthAction";
import "./EmployerRegister.scss";
import { StylesProvider } from "@material-ui/core/styles";
import {
  TextField
} from "@material-ui/core"
const EmployerRegister = (props) => {
  const navigate = useNavigate();
  const { user, register } = props;
  const [userState, setUserstate] = useState({});
  const [errorHandler, setErrorHandler] = useState({
    hasError: false,
    message: "",
  });

  return (
    <StylesProvider injectFirst>
      <div className="employer-container">
      <h3 className="font-weight-bold">Register As An Employer</h3>
      
      <form
        onSubmit={(event) => {
          event.preventDefault();
          register(userState, navigate, setErrorHandler);
        }}
      >
        <div className="form-group">
          <div className="form-row">
            <div className="col">
            <TextField id="standard-basic" label="Company Name" variant="standard" placeholder="Enter Company Name" onChange={(event) => {
                  const companyName = event.target.value;
                  setUserstate({ ...userState, ...{ companyName } });
                }} />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="col">
            <TextField id="standard-basic" label="Contact Name" variant="standard" placeholder="Enter Recruiter Contact Name" onChange={(event) => {
                  const contactName = event.target.value;
                  setUserstate({ ...userState, ...{ contactName } });
                }} />
              
            </div>
          </div>
        </div>
        <div className="form-group">
        <TextField id="standard-basic" label="Email Address" variant="standard" placeholder="Email Address" onChange={(event) => {
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
        <div className="sign-in-employer">
        Already an employer?
        <Link to="/login">
          <h6 className="sign-in-link">Login</h6>
        </Link>
      </div>
        {/* <div className="login-social-media py-3">
          <button className="btn btn-primary btn-block btn-sm">
            Continue with Google
          </button>
        </div> */}
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
      dispatch(RegisterEmployerAuthAction(userState, history, setErrorHandler));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployerRegister);
