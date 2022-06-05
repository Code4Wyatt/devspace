import axios from "axios";
import { useNavigate, Redirect, history } from "react-router";

const AuthActionType = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_FAIL: "LOGOUT_FAIL",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
};

const RegisterAuthAction = (userState, navigate, setErrorHandler) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:9000/auth/developer-register", userState);
      const { data } = res;
      dispatch({ type: AuthActionType.REGISTER_SUCCESS, payload: data });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        dispatch({
          type: AuthActionType.REGISTER_FAIL,
          payload: error.response.data.message,
        });
        setErrorHandler({
          hasError: true,
          message: error.response.data.message,
        });
      }
    }
  };
};
const RegisterEmployerAuthAction = (userState, navigate, setErrorHandler) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:9000/auth/employer-register", userState);
      const { data } = res;
      dispatch({ type: AuthActionType.REGISTER_SUCCESS, payload: data });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        dispatch({
          type: AuthActionType.REGISTER_FAIL,
          payload: error.response.data.message,
        });
        setErrorHandler({
          hasError: true,
          message: error.response.data.message,
        });
      }
    }
  };
};

const LoginAuthAction = (loginState, navigate, setErrorHandler) => {
  const API = process.env.API_URL;

  return async (dispatch) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/login",
        loginState
      );
      console.log(res);
      const { data } = res;
      dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: data });
      navigate("/timeline")
    } catch (error) {
      console.log(error)
      if (error.response) {
         console.log(error)
        dispatch({
          type: AuthActionType.LOGIN_FAIL,
          payload: error.response.data.message,
        });
      }
      setErrorHandler({ hasError: true, message: error.message });
    }
  };
};

const LogOutAuthAction = (history) => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/logout");
      const { data } = res;
      dispatch({
        type: AuthActionType.LOGOUT_SUCCESS,
        payload: data.message,
      });
      history.push("/login");
    } catch (error) {
      if (error.response) {
        dispatch({
          typetype: AuthActionType.LOGIN_FAIL,
          payload: error.response.data.message,
        });
      }
    }
  };
};

export {
    AuthActionType,
    RegisterEmployerAuthAction,
  RegisterAuthAction,
  LogOutAuthAction,
  LoginAuthAction,
};
