import './Home.scss'
import { useState, useEffect } from "react"
import { useSelector, connect, useDispatch } from "react-redux"
import { addCurrentUserAction } from "../../redux/actions/UserAction"
import Nav from "../../components/Nav/Nav"
import abstract from "../../assets/abstract.png"
import geometric from "../../assets/geometric.png"
import { Container } from "@material-ui/core"

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

        <div className="home__banner">
        <h1 className="home__banner-text animate-charcter2">Discover developers.</h1>
          <h1 className="home__banner-subtitle animate-charcter">
            Engage with employers.
          </h1>
        </div>
          
      </div>

    </>
  )
}

export default Home