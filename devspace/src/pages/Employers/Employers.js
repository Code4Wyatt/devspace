import "./Employers.scss"
import { Container, TextField, Typography } from "@material-ui/core"
import { useState, useEffect } from "react"
import Stack from '@mui/material/Stack'
import EmployerCard from "../../components/EmployerCard/EmployerCard"

const Employers = () => {
  const [employers, setEmployers] = useState([])

  console.log(employers)
  useEffect(() => {
    const fetchEmployers = async () => {
      try {
        let employers = await fetch(`http://localhost:9000/employer/all`)
        let data = await employers.json()
        setEmployers(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchEmployers()
  }, [])

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
          <TextField id="standard-basic" label="Search Employers" variant="standard" />
        </Container>
      
        {employers[0]?.map((employer) => {
             return <Stack className="employer__container">
             <EmployerCard />
                </Stack>
          })}
    
      </div>
    </>
  )
}

export default Employers