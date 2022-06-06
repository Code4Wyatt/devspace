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

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "black",
    borderBottom: "1px solid black",
  },
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
    position: "fixed",
    left: "100px",
  },
  auth: {
    display: "flex",
    position: "fixed",
    right: "20px",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    color: "#F2BD4D",

  },
  drawer: {
    color: "white"
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "#F2BD4D",
      borderBottom: "1px solid white",
    },
  },
}));

const Nav = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <>
      <AppBar position="static" className={classes.navbar}>
        <CssBaseline />
        <Toolbar>
          <Typography variant="h5" className={classes.logo}>
            DevHire
          </Typography>
          {isMobile ? (
            <DrawerComponent  />
          ) : (
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/about" className={classes.link}>
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
              <div className={classes.auth}>
                <Link to="/login" className={classes.link}>
                  Login
                </Link>
                <Link to="/register" className={classes.link}>
                  Register
                </Link>
              </div>
            </div>

          )}
        </Toolbar>
      </AppBar>

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
