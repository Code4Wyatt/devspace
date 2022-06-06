import './Home.scss'
import { useState, useEffect } from "react"
import { useSelector, connect, useDispatch } from "react-redux"
import { addCurrentUserAction } from "../../redux/actions/UserAction"
import Nav from "../../components/Nav/Nav"

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
        
      </>
  )
}

export default Home