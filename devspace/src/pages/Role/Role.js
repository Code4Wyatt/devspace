import './Role.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from "@material-ui/core"
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

const Role = (props) => {
  const [role, setRole] = useState([])
  let postId = useParams()
  
  useEffect(() => {
    const fetchRole = async () => {
      try {
        let response = await fetch(`http://localhost:9000/roles/${postId.id}`)
        let data = await response.json()
        setRole(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchRole()
  }, [postId.id])

  return (
    <>
      <div className="role__section">
        <Stack>
          <Button variant="outlined" className="role__section-applyBtn">Apply</Button>
          <Button variant="outlined" className="role__section-save">Save</Button>
        </Stack>
        
        <Typography
          variant="h2"
          component="h2"
          className="role__section-title animate-charcter2"
        >
          {role?.role?.company}
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          className="role__section-jobTitle animate-charcter2"
        >
          {role?.role?.jobTitle}
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          className="role__section-location animate-charcter"
        >
          {role?.role?.location}
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          className="role__section-positionType animate-charcter"
        >
          {role?.role?.positionType}
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          className="role__section-salary animate-charcter"
        >
          {role?.role?.salary}
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          className="role__section-description"
        >
          {role?.role?.description}
        </Typography>
        
      </div>
    </>
    
  )
}

export default Role