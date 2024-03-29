import "./DevCard.scss";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";

const DevCard = (props) => {
  let developerId = props.developer._id;
  console.log('dev props', props.developer._id);
  let projectsLength = props.developer?.projects.length;

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/developers/${developerId}`);
  }

  return (
    <Paper elevation={12} className="dev__card">
      <Avatar
        alt="Developer picture"
        src="https://wp.en.aleteia.org/wp-content/uploads/sites/2/2018/09/web3-happy-people-outside-smile-sun-nature-eduardo-dutra-620857-unsplash.jpg?w=620&h=348&crop=1"
        className="dev__card-avatar"
        onClick={() => handleClick()}
      />
      <Stack direction="row" spacing={2} className="dev__card-social">
        <a href={props.developer.linkedIn}>
          <Avatar
            alt="Developer picture"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
            className="dev__card-linkedIn"
          />
        </a>
        <a href={props.developer.gitHub}><Avatar
          alt="Developer picture"
          src="https://www.kindpng.com/picc/m/255-2558173_github-logo-png-transparent-png.png"
          className="dev__card-github"
        /></a>

      </Stack>
      <Typography variant="h6" component="h2" className="dev__card-name">
        {props.developer?.firstName} {props.developer?.lastName}
      </Typography>
      <Typography className="dev__card-location">
        {props.developer?.location}
      </Typography>
      <Typography className="dev__card-statement">
        {props.developer?.statement}
      </Typography>
      <Typography className="dev__card-projects">
        Projects: {projectsLength}
      </Typography>
      <Typography className="dev__card-languages">
        Main Technologies: {props.developer?.languages}
      </Typography>

      <Button size="small" onClick={handleClick}>
          explore
        </Button>
    </Paper>
  );
};

export default DevCard;
