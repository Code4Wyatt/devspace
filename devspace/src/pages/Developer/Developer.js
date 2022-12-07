import React, { useEffect, useState } from 'react'
import './Developer.scss'
import { useParams } from 'react-router-dom'
import { Avatar, Typography, Grid } from "@material-ui/core";

const Developer = (props) => {
    const [developer, setDeveloper] = useState([]);
    let params = useParams();
    let id = params.id;
    useEffect(() => {
        const fetchDeveloper = async () => {
            try {
                let response = await fetch(`http://localhost:9000/developer/${id}`);
                let data = await response.json();
                setDeveloper(data);
                console.log(developer);
            } catch (error) {
                console.log('fetchDeveloper error', error)
            }
        }
        fetchDeveloper()
    }, []);
    

  return (
    <div className='developer__page'>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        {developer.firstName}
    </div>
  )
}

export default Developer