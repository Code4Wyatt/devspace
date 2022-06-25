import './EmployerRole.scss'
import Box from '@mui/material/Box'
import { Typography } from "@material-ui/core"
import { format } from "date-fns"

const EmployerRole = (props) => {
    console.log(props)
    const d = new Date(props.role.createdAt);
    let formattedDate = d.toLocaleDateString();
    let descriptionLimit = props.role.description.substring(0, 203)
  return (
      <Box
          onClick={() => console.log(props.role._id)}
          className="role__card"
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      >
          <Typography className="role__card-title">{props.role.jobTitle}</Typography>
          <Typography className="role__card-location">{props.role.location}</Typography>
          <Typography className="role__card-type">{props.role.positionType}</Typography>
          <Typography className="role__card-date">Posted: {formattedDate}</Typography>
          <Typography className="role__card-description">{descriptionLimit}...</Typography>
         
          <Typography className="role__card-applicants">Applicants: {props.role.applicants.length}</Typography>
    </Box>
  )
}

export default EmployerRole