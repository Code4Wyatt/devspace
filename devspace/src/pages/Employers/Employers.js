import "./Employers.scss"
import { Container, TextField, Typography } from "@material-ui/core";

const Employers = () => {
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
      </div>
    </>
  )
}

export default Employers