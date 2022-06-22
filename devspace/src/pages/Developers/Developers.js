import "./Developers.scss";
import React from "react";
import { Container, TextField, Typography } from "@material-ui/core";


const Developers = () => {
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
          <TextField id="standard-basic" label="Search Developers" variant="standard" />
        </Container>
      </div>
    </>
  );
};

export default Developers;
