import "./Developers.scss";
import { Container, TextField, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DevCard from "../../components/DevCard/DevCard";

const Developers = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const allDevelopers = await fetch(
          `http://localhost:9000/developer/all`
        );
        const data = await allDevelopers.json();
        setDevelopers(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDevelopers();
  }, []);

  return (
    <>
      <div className="developer__section">
        <Typography
          variant="h1"
          component="h2"
          className="developer__section-title animate-charcter2"
        >
          Discover developers.
        </Typography>
        <Container fixed className="search__container">
          <TextField
            id="standard-basic"
            label="Search Developers"
            variant="standard"
          />
        </Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <DevCard />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Developers;
