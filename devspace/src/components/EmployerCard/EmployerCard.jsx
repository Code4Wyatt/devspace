import './EmployerCard.scss'
import { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from "react-router-dom";



const EmployerCard = (props) => {
  const navigate = useNavigate();
  console.log("Card Props:", props.employer)
  function handleClick() {
                  navigate(`/employers/${props.employer._id}`);
      }
  // let shortenedDescription = props.employer.companyDescription.substring(0, 10)
  console.log(props?.employer?.companyDescription?.substring(0, 30))
  return (
     <Card sx={{ maxWidth: 345 }} className="employer__card">
      <CardMedia
        component="img"
        alt="company logo"
        height="140"
        image={props.employer.companyLogo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          {props.employer.companyName}
        </Typography>
        <Typography variant="body2" color="white">
          {props?.employer?.companyDescription?.substring(0, 135)}...
        </Typography>
      </CardContent>
      <CardActions className="actions">
        <Button size="small">Favourite</Button>
        
        <Button size="small" onClick={handleClick}>explore</Button>
      </CardActions>
    </Card>
  )
}

export default EmployerCard