import "./Employer.scss";
import { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";

const Employer = (props) => {
  const [employer, setEmployer] = useState([]);
  let employerId = useParams();
  console.log(employer?.companyDescription);

  useEffect(() => {
    const fetchEmployer = async () => {
      try {
        let employer = await fetch(
          `http://localhost:9000/employer/${employerId.id}`
        );
        let data = await employer.json();
        setEmployer(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployer();
  }, [employerId.id]);

  return (
    <div className="employer__page">
      <Box
        component="img"
        alt="The house from the offer."
        src={employer?.companyLogo}
        className="employer__page-logo"
      />
      <Typography className="employer__page-company">
        {employer?.companyName}
      </Typography>
      <Typography className="employer__page-description">
        {employer?.companyDescription}
      </Typography>
    </div>
  );
};

export default Employer;
