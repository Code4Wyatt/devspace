import "./Nav.scss";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "../Drawer/Drawer";
import { useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { LogOutAuthAction } from "../../redux/actions/AuthAction";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { removeCurrentUserAction } from "../../redux/actions/UserAction";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "transparent",
  },
  navlinks: {
    marginLeft: theme.spacing(15),
    display: "flex",
    position: "absolute",
    width: "100%",
  },
  auth: {
    display: "flex",
    position: "absolute",
    right: "200px",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    color: "white",
  },
  drawer: {
    color: "white",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "#49BACC",
      borderBottom: "1px solid white",
    },
  },
}));

const Nav = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const user = useSelector((state) => state.currentUser.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { logout } = props;
  const [loginState, setLoginState] = useState({});
  const navigate = useNavigate();
  const [errorHandler, setErrorHandler] = useState({
    hasError: false,
    message: "",
  });
  const authLocalStorage = localStorage.getItem("auth");
  const jwtToken = useSelector((state) => state.authState.user.accessToken);

  console.log("User: ", user);
  console.log(user[0].data.currentUser.firstName);

  return (
    <>
      <div className="nav-section">
        <AppBar position="static" className={classes.navbar}>
          <CssBaseline />
          <Toolbar>
            <Typography variant="h5" className={classes.logo}>
              DevSpace
            </Typography>
            {isMobile ? (
              <DrawerComponent />
            ) : (
              <div className={classes.navlinks}>
                <div className={classes.left}>
                  <Link to="/" className={classes.link}>
                    Home
                  </Link>
                  <Link to="/developers" className={classes.link}>
                    Developers
                  </Link>
                  <Link to="/employers" className={classes.link}>
                    Employers
                  </Link>
                  <Link to="/roles" className={classes.link}>
                    Roles
                  </Link>

                  <Link to="/faq" className={classes.link}>
                    FAQ
                  </Link>
                </div>
                {authLocalStorage ? (
                  <div className={classes.auth}>
                    <p className="auth">Welcome, {user[0].data.currentUser.firstName}</p>
                    <div>
                      <Button
                          id="basic-button"
                          className="nav-menu"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        ≡
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem
                          onClick={handleClose}
                          className="nav__menu-item"
                        >
                          <p className="nav__menu-itemText">Profile </p>
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose}
                          className="nav__menu-item"
                        >
                          My account
                        </MenuItem>
                        <MenuItem
                          className="nav__menu-item"
                          onClick={(event) => {
                            localStorage.removeItem("auth");
                            window.location.reload(true);
                          }}
                        >
                          Logout
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>
                ) : (
                  <div className={classes.auth}>
                    <Link to="/login" className={classes.link}>
                      Login
                    </Link>
                    <Link to="/register" className={classes.link}>
                      Register
                    </Link>
                  </div>
                )}
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>

      {/* <div className="navbar">
        <h5>DevSpace</h5>
        <div className="links">
          <Link to="/" className="link">
            <p>Employers</p>
          </Link>
          <Link to="/employers" className="link">
            <p>Developers</p>
          </Link>
          <Link to="/employers" className="link">
            <p>Roles</p>
          </Link>
        </div>
        <div className="auth">
          <Link to="/login" className="auth-link">
            <h6>Login</h6>
          </Link>
          <Link to="/register" className="auth-link">
            <h6>Register</h6>
          </Link>
        </div>
      </div> */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (loginState, history, setErrorHandler) => {
      dispatch(removeCurrentUserAction(loginState, history, setErrorHandler));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
