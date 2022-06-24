import "./Employers.scss";
import { Container, TextField, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import EmployerCard from "../../components/EmployerCard/EmployerCard";

const Employers = () => {
  const [employers, setEmployers] = useState([]);

  console.log(employers.employers);
  useEffect(() => {
    const fetchEmployers = async () => {
      try {
        let employers = await fetch(`http://localhost:9000/employer/all`);
        let data = await employers.json();
        setEmployers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployers();
  }, []);

  return (
    <>
      <div className="employer__section">
        <Typography
          variant="h1"
          component="h2"
          className="employer__section-title animate-charcter2"
        >
          Engage with employers.
        </Typography>
        <Container fixed className="search__container">
          <TextField
            id="standard-basic"
            label="Search Employers"
            variant="standard"
          />
        </Container>
        <Grid container className="employer__container">
          {employers.employers?.map((employer, i) => {
            return (
              <>
                <Grid item xs={6} lg={3} xl={2}>
                  <EmployerCard employer={employer} key={i} />
                </Grid>
              </>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default Employers;
