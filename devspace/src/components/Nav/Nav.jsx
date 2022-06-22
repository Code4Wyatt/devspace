import "./Nav.scss";
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

const Nav = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const user = useSelector((state) => state.currentUser.user);
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
                  <Link to="/contact" className={classes.link}>
                    Employers
                  </Link>
                  <Link to="/contact" className={classes.link}>
                    Roles
                  </Link>

                  <Link to="/faq" className={classes.link}>
                    FAQ
                  </Link>
                </div>
                {user ? (
                  <div className={classes.auth}>
                      Welcome,  {user[0].data.currentUser.firstName}
                      
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

export default Nav;
