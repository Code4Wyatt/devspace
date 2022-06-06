import React, { useState } from "react"
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core"
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from "react-router-dom"
import zIndex from "@material-ui/core/styles/zIndex"
import './Drawer.scss'
import { StylesProvider } from "@material-ui/core/styles";
const useStyles = makeStyles(()=>({

    drawer: {
        color: "white",
        top: "-10",
    },
    link:{
        textDecoration:"none",
        color: "white",
        fontSize: "20px",
    },
    icon: {
        color: "white"
    }
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
    <StylesProvider injectFirst>

    <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)} 
        
      >
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about" className={classes.link}>About</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact" className={classes.link}>Contact</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about" className={classes.link}>Faq</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </StylesProvider>
  
    </>
  );
}
export default DrawerComponent;