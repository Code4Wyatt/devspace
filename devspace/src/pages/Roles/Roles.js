import "./Roles.scss";
import { Container, TextField, Typography } from "@material-ui/core";

const Roles = () => {
  return (
    <>
      <div className="roles__section">
        <Typography
          variant="h1"
          component="h2"
          className="roles__section-title animate-charcter2"
        >
          Review roles.
        </Typography>
        <Container fixed className="search__container">
          <TextField id="standard-basic" label="Search Roles" variant="standard" />
        </Container>
      </div>
    </>
  )
}

export default Roles