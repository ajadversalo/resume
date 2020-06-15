import React, {useEffect, useState, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactIcon from '@material-ui/icons/MailOutline';
import ProjectsIcon from '@material-ui/icons/Dvr';
import AboutIcon from '@material-ui/icons/Face';
import SkillsIcon from '@material-ui/icons/Build';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#1d3557',
    display: 'flex',
    justifyContent: 'space-between', 

    [theme.breakpoints.down('sm')]:{
      flexDirection: 'row',
      height: '65px',
      width: '100%'
    },
    [theme.breakpoints.up('sm')]:{
      flexDirection: 'column',
      width: '100px',
      minHeight: '100vh',
      maxHeight: '100%',
    },  
  },
  categorySection:{
    [theme.breakpoints.down('sm')]:{
      flexDirection: 'column',
      display: 'none',     
    },
    [theme.breakpoints.up('sm')]:{
      flexDirection: 'row',
      display: 'block',
    },
  },
  socialMediaSection:{
    display: 'flex', 
    [theme.breakpoints.down('sm')]:{
      flexDirection: 'row'
    },
    [theme.breakpoints.up('sm')]:{
      
      flexDirection: 'column'
    }
  },
  logo: {
    marginTop: '0.5rem',
    paddingLeft: '0.7rem',
    color: '#FFF'
  },
  icon: {
    fill: '#FFF',
    margin: '0 auto'
  },
  socialMediaIcon: {
    fill: '#FFF',
    margin: '0 auto',
    '&:hover':{
      fill: '#a8dadc'
    }
  },
 text: {
    color: '#FFF',
    height: '37px'
  },
  listItem : {
    display: 'flex', 
    flexDirection: 'column'
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const [showProjectsButton, setShowProjectsButton] = useState(false);
  const [showSkillsButton, setShowSkillsButton] = useState(false);
  const [showAboutButton, setShowAboutButton] = useState(false);
  const [showContactButton, setShowContactButton] = useState(false);
  const { move, showPage } = props;

  const buttonProjectsRef = useRef(null);
  const buttonSkillsRef = useRef(null);
  const buttonAboutRef = useRef(null);
  const buttonContactRef = useRef(null);

  useEffect(() => {
    buttonProjectsRef.current.addEventListener("mouseover", function( event ) {   
      setShowProjectsButton(true);
    }, false);

    buttonProjectsRef.current.addEventListener("mouseleave", function( event ) {   
      setShowProjectsButton(false);
    }, false);

    buttonSkillsRef.current.addEventListener("mouseover", function( event ) {   
      setShowSkillsButton(true);
    }, false);

    buttonSkillsRef.current.addEventListener("mouseleave", function( event ) {   
      setShowSkillsButton(false);
    }, false);

    buttonAboutRef.current.addEventListener("mouseover", function( event ) {   
      setShowAboutButton(true);
    }, false);

    buttonAboutRef.current.addEventListener("mouseleave", function( event ) {   
      setShowAboutButton(false);
    }, false);

    buttonContactRef.current.addEventListener("mouseover", function( event ) {   
      setShowContactButton(true);
    }, false);

    buttonContactRef.current.addEventListener("mouseleave", function( event ) {   
      setShowContactButton(false);
    }, false);
  }, []);

  const handleClick = (page) => {
      move(page);
  }

  return (
      <div className={classes.root}>
        <h1 className={classes.logo} onClick={() => { handleClick('name') }}> AJ </h1>

        <List component="nav" aria-label="main mailbox folders" className={classes.categorySection}>
            <ListItem button ref={buttonProjectsRef} className={classes.listItem} onClick={() => { handleClick('projects') }}>
              <Collapse in={!showProjectsButton} timeout={500}>
              <ListItemIcon>
                <ProjectsIcon className={classes.icon} style={{fill: showPage === 'projects' ? '#E9B44C' : '#FFF'}}/>
              </ListItemIcon>
              </Collapse>
              <Collapse in={showProjectsButton} timeout={500}>
              <ListItemText className={classes.text}>
                  Projects
                </ListItemText>
                </Collapse>
            </ListItem>
            
            <ListItem button ref={buttonSkillsRef} className={classes.listItem} onClick={() => { handleClick('skills') }}>
            <Collapse in={!showSkillsButton} timeout={500}>
              <ListItemIcon>
                <SkillsIcon className={classes.icon} style={{fill: showPage === 'skills' ? '#E9B44C' : '#FFF'}}/>
              </ListItemIcon>
              </Collapse>
              <Collapse in={showSkillsButton} timeout={500}>
                <ListItemText className={classes.text}>
                    Skills
                </ListItemText>
              </Collapse>
            </ListItem>
            
            <ListItem button ref={buttonAboutRef} className={classes.listItem} onClick={() => { handleClick('about') }}>
            <Collapse in={!showAboutButton} timeout={500}>
              <ListItemIcon>
                <AboutIcon className={classes.icon} style={{fill: showPage === 'about' ? '#E9B44C' : '#FFF'}}/>
              </ListItemIcon>
              </Collapse>
              <Collapse in={showAboutButton} timeout={500}>
                <ListItemText className={classes.text}>
                    About
                </ListItemText>
              </Collapse>
            </ListItem>

            <ListItem button ref={buttonContactRef} className={classes.listItem}>
            <Collapse in={!showContactButton} timeout={500}>
              <ListItemIcon>
                <ContactIcon className={classes.icon} style={{fill: showPage === 'contact' ? '#E9B44C' : '#FFF'}}/>
              </ListItemIcon>
              </Collapse>
              <Collapse in={showContactButton} timeout={500}>
              <ListItemText className={classes.text}>
                Contact
              </ListItemText>
              </Collapse>
            </ListItem>
          </List>

          <List component="nav" aria-label="main mailbox folders" className={classes.socialMediaSection}>
            <ListItem button>
              <ListItemIcon>
                <LinkedInIcon className={classes.socialMediaIcon}/>
              </ListItemIcon>
            </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <GitHubIcon className={classes.socialMediaIcon}/>
                </ListItemIcon>
              </ListItem>
          </List>
      </div>
  );
}
export default Navbar;