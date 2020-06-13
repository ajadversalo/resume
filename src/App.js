import React, {useEffect, useState, useRef} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Collapse } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import 'fontsource-roboto';

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

import Prism from './img/prism.png';

import { Typography } from '@material-ui/core';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Prism})`, 
    backgroundRepeat: 'repeat', 
    height: '100vh',
    display: 'flex',
    [theme.breakpoints.down('sm')]:{
      flexDirection: 'column',      
    },
    [theme.breakpoints.up('sm')]:{
      flexDirection: 'row'
    },
  },
  navbarRoot: {
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
      height: '100%',
    },  
  },
  
  navbarSections:{
    [theme.breakpoints.down('sm')]:{
      flexDirection: 'column',
      display: 'none',
      flexDirection: 'column' 
      
    },
    [theme.breakpoints.up('sm')]:{
      flexDirection: 'row',
      display: 'block',
      flexDirection: 'row' 
    },
  },
  
  navbarSocialMedia:{
    display: 'flex', 
    [theme.breakpoints.down('sm')]:{
      flexDirection: 'row'
    },
    [theme.breakpoints.up('sm')]:{
      
      flexDirection: 'column'
    }
  },
  navbarLogo: {
    marginTop: '0.5rem',
    paddingLeft: '0.7rem',
    color: '#FFF'
  },
  contentRoot:{
    height: '100%', 
    width: '100%'
  },
  
  navbarIcon: {
    fill: '#FFF',
    margin: '0 auto'
  },
  navbarSocialMediaIcon: {
    fill: '#FFF',
    margin: '0 auto',
    '&:hover':{
      fill: '#a8dadc'
    }
  },

  navbarText: {
    color: '#FFF',
    height: '37px'
  },
  listItem : {
    display: 'flex', 
    flexDirection: 'column'
  },
  content: {
    margin: 0, 
    position: 'absolute', 
    top: '50%',  
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    display: 'block'
  },
  bottomNavRoot: {
    [theme.breakpoints.down('sm')]:{
      maxWidth: '300px', 
    minWidth: '200px', 
    position: 'sticky', 
    margin: '0 auto 1rem auto', 
    justifyContent: 'space-around', 
    display: 'flex'
    },
    [theme.breakpoints.up('sm')]:{     
      display: 'none'
    },
    borderRadius: '5px',
    padding: '0 1rem'    
  },
}));

function App() {
  const classes = useStyles();
  const [showProjectsButton, setShowProjectsButton] = useState(false);
  const [showSkillsButton, setShowSkillsButton] = useState(false);
  const [showAboutButton, setShowAboutButton] = useState(false);
  const [showContactButton, setShowContactButton] = useState(false);

  const [showContent, setShowContent] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

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

  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const move = (page) => {
    
    //Set all false
    setShowContent(false)
    setShowName(false);
    setShowProjects(false);
    setShowSkills(false);
    setShowAbout(false);
    
    setTimeout(()=> {
      switch(page){
        case 'name':
          setShowName(true);
          break;
        case 'project':
          setShowProjects(true);
          break;
        case 'about':
          setShowAbout(true);
          break;
        case 'skills':
          setShowSkills(true);
          break;
        default:
            break;
      }  
      setShowContent(true);
    }, 500)
}

  return (
    <div className={classes.root}>
      <div className={classes.navbarRoot}>
        <h1 className={classes.navbarLogo} onClick={()=>{move('name')}}> AJ </h1>
        {/* -------------------------------------------------------------------------------- */}
        <List component="nav" aria-label="main mailbox folders" className={classes.navbarSections}>
            <ListItem button ref={buttonProjectsRef} className={classes.listItem} onClick={()=>{
              move('project');
              }}>
              <Collapse in={!showProjectsButton} timeout={500}>
              <ListItemIcon className={classes.contactItems}>
                <DvrIcon className={classes.navbarIcon}/>
              </ListItemIcon>
              </Collapse>
              <Collapse in={showProjectsButton} timeout={500}>
              <ListItemText className={classes.navbarText}>
                  Projects
                </ListItemText>
                </Collapse>
            </ListItem>
            
            <ListItem button ref={buttonSkillsRef} className={classes.listItem} onClick={()=>{
              move('skills');
              }}>
            <Collapse in={!showSkillsButton} timeout={500}>
              <ListItemIcon>
                <BuildIcon className={classes.navbarIcon} />
              </ListItemIcon>
              </Collapse>
              <Collapse in={showSkillsButton} timeout={500}>
                <ListItemText className={classes.navbarText}>
                    Skills
                </ListItemText>
              </Collapse>
            </ListItem>
            
            <ListItem button ref={buttonAboutRef} className={classes.listItem} onClick={()=>{
              move('about');
              }}>
            <Collapse in={!showAboutButton} timeout={500}>
              <ListItemIcon>
                <FaceIcon className={classes.navbarIcon}/>
              </ListItemIcon>
              </Collapse>
              <Collapse in={showAboutButton} timeout={500}>
                <ListItemText className={classes.navbarText}>
                    About
                </ListItemText>
              </Collapse>
            </ListItem>

            <ListItem button ref={buttonContactRef} className={classes.listItem}>
            <Collapse in={!showContactButton} timeout={500}>
              <ListItemIcon>
                <MailOutlineIcon className={classes.navbarIcon}/>
              </ListItemIcon>
              </Collapse>
              <Collapse in={showContactButton} timeout={500}>
              <ListItemText className={classes.navbarText}>
                Contact
              </ListItemText>
              </Collapse>
            </ListItem>
          </List>
          {/* -------------------------------------------------------------------------------- */}
          <List component="nav" aria-label="main mailbox folders" className={classes.navbarSocialMedia}>
            <ListItem button>
              <ListItemIcon>
                <LinkedInIcon className={classes.navbarSocialMediaIcon}/>
              </ListItemIcon>
            </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <GitHubIcon className={classes.navbarSocialMediaIcon}/>
                </ListItemIcon>
              </ListItem>
          </List>
      </div>

      <div className={classes.contentRoot}>
        <Fade in={showContent}>
          <div className={classes.content}>
            
            {showName &&
              <div>
                <Typography variant='h3'>AJ Adversalo</Typography>
                <h2>Full stack software developer based in Vancouver, British Columbia.</h2>
              </div>
            }

            {showProjects &&
              <div>
                <Typography variant='h3'>Projects</Typography>
              </div>
            }

            {showSkills &&
              <div>
                <Typography variant='h3'>Skills</Typography>
              </div>
            }

            {showAbout &&
              <div>
                <Typography variant='h3'>About</Typography>
              </div>
            }

          </div>
        </Fade>
      </div>
         
        
          <BottomNavigation value={value} onChange={handleChange} className={classes.bottomNavRoot}>
            <BottomNavigationAction label="Projects" value="recents" icon={<DvrIcon />} />
            <BottomNavigationAction label="Skills" value="favorites" icon={<BuildIcon />} />
            <BottomNavigationAction label="About" value="nearby" icon={<FaceIcon />} />
            <BottomNavigationAction label="Contact" value="folder"icon={<MailOutlineIcon />} />
          </BottomNavigation>
        
        
     {/*
        <div style={{position: 'fixed', left: 0, top: 0, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#1d3557', width: '100px'}}>
          <div style={{margin: '0 auto', color: '#FFF'}} 
          onClick={()=>{
            setShowIntro(false)
            setShowProjects(false); 
            
            setTimeout(()=> {
              setShowName(true);
              setShowIntro(true)
            }, 200)
            
            }}>

          </div>
 */}
    </div>
  );
}

export default App;