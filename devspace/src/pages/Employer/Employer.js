import "./Employer.scss";
import { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";
import EmployerRole from "../../components/EmployerRole/EmployerRole";

const Employer = (props) => {
  const [employer, setEmployer] = useState([]);
  let employerId = useParams();
  let roles = employer.rolesAvailable;

  useEffect(() => {
    const fetchEmployer = async () => {
      try {
        let employer = await fetch(
          `http://localhost:9000/employer/${employerId.id}`
        );
        let data = await employer.json();
        setEmployer(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployer();
  }, [employerId.id]);

  return (
    <div className="employer__page">
      <Box
        component="img"
        alt="The house from the offer."
        src={employer?.companyLogo}
        className="employer__page-logo"
      />
      <Typography className="employer__page-company">
        {employer?.companyName}
      </Typography>
      <Typography className="employer__page-description">
        {employer?.companyDescription}
      </Typography>
      <h2 className="positions-title">Positions Available</h2>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 2, sm: 8, md: 3 }}
              className="employer__page-positions"
      >
        {roles &&
          roles.map((role, i) => (
            <Grid item xs={12} sm={4} md={3}  className="employer__page-position">
                  <EmployerRole role={role} key={i} className="position"/>
            </Grid>
          ))}
      </Grid>

    </div>
  );
};

export default Employer;
