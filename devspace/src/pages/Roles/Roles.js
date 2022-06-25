import "./Roles.scss";
import { useEffect, useState } from "react";
import { Container, TextField, Typography } from "@material-ui/core";
import RoleTable from "../../components/RoleTable/RoleTable";
import networkit from "../../assets/networkit.png";
const Roles = () => {
  const [roles, setRoles] = useState([]);
  console.log(roles);
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await fetch("http://localhost:9000/roles");
        const data = await response.json();
        setRoles([data.roles]);
        console.log(data.roles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRoles();
  }, []);

  return (
    <>
      <div className="roles__section">
                <img src={networkit} className="networkit" />
        <Typography
          variant="h1"
          component="h2"
          className="roles__section-title animate-charcter2"
        >
          Review roles.
        </Typography>
        <Container fixed className="search__container">
          <TextField
            id="standard-basic"
            label="Search Roles"
            variant="standard"
          />
        </Container>
        <Container fixed className="roles__container">
          {roles[0] ? <RoleTable roles={roles[0]} /> : <h4>Loading Roles...</h4>}
        </Container>
      </div>
    </>
  );
};

export default Roles;
