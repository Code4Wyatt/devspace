import "./Home.scss";
import { useState, useEffect } from "react";
import { useSelector, connect, useDispatch } from "react-redux";
import { addCurrentUserAction } from "../../redux/actions/UserAction";
import Nav from "../../components/Nav/Nav";
import abstract from "../../assets/abstract.png";
import geometric from "../../assets/geometric.png";
import { Container, Grid, Card, Typography } from "@material-ui/core";

const Home = (props) => {
  const [profile, setProfile] = useState([]);
  const email = useSelector((state) => state.authState.user.email);
  const jwtToken = useSelector((state) => state.authState.user.accessToken);

  console.log("email", email);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      // let token = JSON.parse(localStorage.getItem("auth"));
      // const jwttoken = token.user.accessToken;
      try {
        let response = await fetch(
          `http://localhost:9000/developer/currentUser/${email}`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );

        if (response.ok) {
          let data = await response.json();
          console.log("Profile:", data);
          setProfile(data);
          dispatch(addCurrentUserAction({ data }));
          console.log(profile);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <>
      <main>
        <div className="home__banner">
          {/* <img src={abstract} className="abstract" /> */}
          <Typography
            variant="h1"
            component="h2"
            className="home__banner-text animate-charcter2"
          >
            Discover developers.
          </Typography>
          <Typography
            variant="h1"
            component="h2"
            className="home__banner-subtitle animate-charcter"
          >
            Engage with employers.
          </Typography>
        </div>
        <div className="mission__statement">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            className="mission__statement-grid"
          >
            <Grid item xs={6}>
              <Typography
                variant="h4"
                component="h2"
                className="mission__statement-statement"
              >
                Find the latest developer talent, globally.
              </Typography>
              {/* <Card variant="outlined" className="mission__statement-cards">
                <p>Discover the latest and greatest graduates in multiple disciplines</p>
              </Card> */}
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h4"
                component="h2"
                className="mission__statement-statement"
              >
                Connect with employers, build a network.
              </Typography>
              {/* <Card variant="outlined" className="mission__statement-cards">
                <p>Hi There</p>
              </Card> */}
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h4"
                component="h2"
                className="mission__statement-statement"
              >
                Developer portal to display projects and skills.
              </Typography>
              {/* <Card variant="outlined" className="mission__statement-cards">
                <p>Hi There</p>
              </Card> */}
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h4"
                component="h2"
                className="mission__statement-statement"
              >
                Employer data to find the most suitable talent.
              </Typography>
              {/* <Card variant="outlined" className="mission__statement-cards">
                <p>Hi There</p>
              </Card> */}
            </Grid>
          </Grid>
        </div>
      </main>
    </>
  );
};

export default Home;
