import "./Home.scss";
import { useState, useEffect } from "react";
import { useSelector, connect, useDispatch } from "react-redux";
import { addCurrentUserAction } from "../../redux/actions/UserAction";
import Nav from "../../components/Nav/Nav";
import abstract from "../../assets/abstract.png";
import geometric from "../../assets/geometric.png";
import global from "../../assets/global.png";
import network from "../../assets/network.png";
import globalNetwork from "../../assets/global-network.png";
import statistics from "../../assets/bar-chart.png";
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
        <img src={network} className="network" />
        <div className="home__banner d-flex">
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
            <Grid item xs={4}>
              <img src={global} className="global"/>
              <Typography
                variant="h4"
                component="h2"
                className="mission__statement-statement"
              >
                Find the latest developer talent, globally.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src={globalNetwork} className="connect" />
              <Typography
                variant="h4"
                component="h2"
                className="mission__statement-statement"
              >
                Connect with employers, build a network.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src={statistics} className="portal" />
              <Typography
                variant="h2"
                component="h2"
                className="mission__statement-statement"
              >
                Developer portal to display projects and skills.
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className="goal__section">
          <Typography variant="h2" component="h4" className="animate-charcter3 goal__section-title">
            THE GOAL
          </Typography>
          <Typography variant="h8" component="h4" className="goal__section-text">
            To provide additional tools and features with the aim of streamlining the process for both developers seeking their introduction to the industry and recruiters seeking their next new talent.
          </Typography>
        </div>
      </main>
    </>
  );
};

export default Home;
