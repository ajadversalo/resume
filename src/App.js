import React, {useEffect} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Collapse } from '@material-ui/core';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DvrIcon from '@material-ui/icons/Dvr';
import FaceIcon from '@material-ui/icons/Face';
import CreateIcon from '@material-ui/icons/Create';
import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles((theme) => ({
  root: {
    //minWidth: '300px',
    //margin: '0 auto',
    //maxWidth: '720px',
    //height: '100vh'
  },
  paperRoot: {
    padding: '1rem',
    marginTop: '1rem',
    width: '100%'
  },
  categoryItems: {
    listStyleType: 'none',
    paddingTop: '3rem'
  },
  contactItems: {
    listStyleType: 'none',
    "& svg": {
      margin: '0 auto'
    }
  },
  icon: {
    fill: '#FFF',
    '&:hover':{
      fill: '#a8dadc'
    }
  },
  listItem : {
    height: '4rem', 
    display: 'flex', 
    flexDirection: 'column'
  }
}));

function App() {
  const classes = useStyles();
  

  useEffect(() => {
    
    let firstIcon = document.querySelector('#root > div > div.MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded > div > div:nth-child(2) > nav > div:nth-child(1) > div.MuiListItemIcon-root.makeStyles-contactItems-4');
    let firstContainer = document.querySelector('#root > div > div.MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded > div > div:nth-child(2) > nav > div:nth-child(1)');
    let secondContainer = document.querySelector('#root > div > div.MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded > div > div:nth-child(2) > nav > div:nth-child(2)');
    let thirdContainer = document.querySelector('#root > div > div.MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded > div > div:nth-child(2) > nav > div:nth-child(3)');
    let fourthContainer = document.querySelector('#root > div > div.MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded > div > div:nth-child(2) > nav > div:nth-child(4)');
    let fifthContainer = document.querySelector('#root > div > div.MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded > div > div:nth-child(2) > nav > div:nth-child(5)');

    let firstText = document.querySelector('#root > div > div.MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded > div > div:nth-child(2) > nav > div:nth-child(1) > div.MuiListItemText-root > span');
    let secondText = document.querySelector('#root > div > div.MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded > div > div:nth-child(2) > nav > div:nth-child(2) > div.MuiListItemText-root > span');
    let thirdText = document.querySelector('#root > div > div.MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded > div > div:nth-child(2) > nav > div:nth-child(3) > div.MuiListItemText-root > span');
    let fourthText = document.querySelector('#root > div > div.MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded > div > div:nth-child(2) > nav > div:nth-child(4) > div.MuiListItemText-root > span');
    let fifthText = document.querySelector('#root > div > div.MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded > div > div:nth-child(2) > nav > div:nth-child(5) > div.MuiListItemText-root > span');
  
    firstText.style.opacity = 0;
    secondText.style.opacity = 0;
    thirdText.style.opacity = 0;
    fourthText.style.opacity = 0;
    fifthText.style.opacity = 0;

    firstContainer.addEventListener("mouseover", function( event ) {   
      firstText.style.opacity = 100;
      firstText.style.transition = 'opacity .6s';
    }, false);

    firstContainer.addEventListener("mouseleave", function( event ) {   
      firstText.style.opacity = 0;
      firstText.style.transition = 'opacity .6s';
    }, false);

    secondContainer.addEventListener("mouseover", function( event ) {   
      secondText.style.opacity = 100;
      secondText.style.transition = 'opacity .6s';
    }, false);

    secondContainer.addEventListener("mouseleave", function( event ) {   
      secondText.style.opacity = 0;
      secondText.style.transition = 'opacity .6s';
    }, false);

    thirdContainer.addEventListener("mouseover", function( event ) {   
      thirdText.style.opacity = 100;
      thirdText.style.transition = 'opacity .6s';
    }, false);

    thirdContainer.addEventListener("mouseleave", function( event ) {   
      thirdText.style.opacity = 0;
      thirdText.style.transition = 'opacity .6s';
    }, false);

    fourthContainer.addEventListener("mouseover", function( event ) {   
      fourthText.style.opacity = 100;
      fourthText.style.transition = 'opacity .6s';
    }, false);

    fourthContainer.addEventListener("mouseleave", function( event ) {   
      fourthText.style.opacity = 0;
      fourthText.style.transition = 'opacity .6s';
    }, false);

    fifthContainer.addEventListener("mouseover", function( event ) {   
      fifthText.style.opacity = 100;
      fifthText.style.transition = 'opacity .6s';
    }, false);

    fifthContainer.addEventListener("mouseleave", function( event ) {   
      fifthText.style.opacity = 0;
      fifthText.style.transition = 'opacity .6s';
    }, false);

  }, []);

  return (
    <div className={classes.root}>
      
        <div style={{marginLeft: '7rem'}}>
          <h1>AJ Adversalo</h1>
          <h2>Software developer</h2>
          <hr/>
        </div>
        <Paper elevation={1}>
        <div style={{position: 'fixed', left: 0, top: 0, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#1d3557', width: '100px'}}>
          <div style={{margin: '0 auto', color: '#FFF'}}>
            <h1>AJ</h1>
          </div>
          <div>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button className={classes.listItem}>
                <ListItemIcon className={classes.contactItems}>
                  <DvrIcon className={classes.icon}/>
                </ListItemIcon>
                <ListItemText style={{color: '#FFF', display: 'block'}}>
                    Projects
                  </ListItemText>
              </ListItem>
              <ListItem button className={classes.listItem}>
                <ListItemIcon className={classes.contactItems}>
                  <CreateIcon className={classes.icon}/>
                </ListItemIcon>
                <ListItemText style={{color: '#FFF', display: 'block'}}>
                    Education
                  </ListItemText>
              </ListItem>
              <ListItem button className={classes.listItem}>
                <ListItemIcon className={classes.contactItems}>
                  <BuildIcon className={classes.icon}/>
                </ListItemIcon>
                <ListItemText style={{color: '#FFF', display: 'block'}}>
                    Skills
                  </ListItemText>
              </ListItem>
              <ListItem button className={classes.listItem}>
                <ListItemIcon className={classes.contactItems}>
                  <FaceIcon className={classes.icon}/>
                </ListItemIcon>
                <ListItemText style={{color: '#FFF', display: 'block'}}>
                    About
                  </ListItemText>
              </ListItem>
                <ListItem button className={classes.listItem}>
                  <ListItemIcon className={classes.contactItems}>
                    <MailOutlineIcon className={classes.icon}/>
                  </ListItemIcon>
                  <ListItemText style={{color: '#FFF', display: 'block'}}>
                    Contact
                  </ListItemText>
                </ListItem>
            </List>
          </div>
          <div style={{paddingBottom: '1rem'}}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <ListItemIcon className={classes.contactItems}>
                  <LinkedInIcon className={classes.icon}/>
                </ListItemIcon>
              </ListItem>
                <ListItem button>
                  <ListItemIcon className={classes.contactItems}>
                    <GitHubIcon className={classes.icon}/>
                  </ListItemIcon>
                </ListItem>
            </List>
          </div>
        </div>
        </Paper>    
    </div>
  );
}

export default App;
