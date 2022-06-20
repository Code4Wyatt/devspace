import './Home.scss'
import { useState, useEffect } from "react"
import { useSelector, connect, useDispatch } from "react-redux"
import { addCurrentUserAction } from "../../redux/actions/UserAction"
import Nav from "../../components/Nav/Nav"
import abstract from "../../assets/abstract.png"
import geometric from "../../assets/geometric.png"
import Grid from "@material-ui/core/Grid"

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
      <div className="main">
      <img src={abstract} className="abstract" />
      <Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>
      </div>
      
      </>
  )
}

export default Home