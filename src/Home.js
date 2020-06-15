import './Home.css';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import 'fontsource-roboto';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import AboutIcon from '@material-ui/icons/Face';
import ContactIcon from '@material-ui/icons/MailOutline';
import ProjectsIcon from '@material-ui/icons/Dvr';
import SkillsIcon from '@material-ui/icons/Build';
import { Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Prism from './img/prism.png';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Prism})`, 
    backgroundRepeat: 'repeat', 
    minHeight: '100vh',
    maxHeight: '100%',
    display: 'flex',
    [theme.breakpoints.down('sm')]:{
      flexDirection: 'column',      
    },
    [theme.breakpoints.up('sm')]:{
      flexDirection: 'row'
    },
  },
  contentRoot:{
    display: 'grid', 
    height: '100vh',
    width: '100%',
    overflowY: 'auto',
    alignItems: 'center'
  },
  content: {
    margin: 0,
    [theme.breakpoints.down('sm')]:{
      padding: '1rem',
    position: 'relative'
    },
    [theme.breakpoints.up('sm')]:{
      display: 'block',
      padding: '0 4rem',
      minWidth: '400px',
    }
  },
  bottomNavRoot: {
    [theme.breakpoints.down('sm')]:{
      display: 'flex',
      maxWidth: '300px', 
      minWidth: '200px', 
      position: 'fixed', 
      top: '90%',
      left: '50%',
      transform: 'translate(-50%, 0)',
      margin: '0 auto 1rem auto', 
      justifyContent: 'space-around', 
    },
    [theme.breakpoints.up('sm')]:{     
      display: 'none'
    },
    borderRadius: '5px',
    padding: '0 1rem'    
  },
}));

function Home() {
  const classes = useStyles();

  const [showContent, setShowContent] = useState(true);
  const [showPage, setShowPage] = useState(null);
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    move(newValue);
  };

  const move = (page) => {
    setShowContent(false)
    setShowPage(null);
    
    setTimeout(()=> {
      setShowPage(page);
      setShowContent(true);
    }, 500)
}

  return (
    <div className={classes.root}>
      <div>
        <Navbar move={move} handleChange={handleChange} showPage={showPage}/>     
      </div>
      <div className={classes.contentRoot} >
        <Fade in={showContent}>
          <div className={classes.content}>
            
            {showPage === 'name' &&
              <div>
                <Typography variant='h3'>AJ Adversalo</Typography>
                <h2>Full stack software developer based in Vancouver, British Columbia.</h2>
              </div>
            }

            {showPage === 'projects' &&
              <div>
                <Typography variant='h3'>Projects</Typography>
              </div>
            }

            {showPage === 'skills' &&
              <div>
                <Typography variant='h3'>Skills</Typography>
              </div>
            }

            {showPage === 'about' &&
              <div style={{overflow: 'hidden'}}>
                <Typography variant='h3'>About</Typography>
                <p>Hoping for better opportunities, my family and I moved here in the spring of 2016. 
                  As I got acquainted to the BC job market. I quickly found out how vast IT opportunities are. 
                  My journey started as a volunteer teaching seniors the basics of computers at Burnaby Neighbourhood House, 
                  after a month, I got my first contract job at Electronic Arts as a Level 2 Desktop Support. 
                  Soon right after, I found myself setting up and suporting small networks or SOHOs at Bosa Properties. 
                  As my career progressed at Taymor Industries, being a Junior to the Systems Admin I had a chance to do 
                  scripting which eventually made me realize what I really wanted to pursue so I finally decided to take the 
                  Software Systems Developer Program at BCIT. I've recently completed the program and I'm excited to start 
                  my career as a software developer.</p>                 
              </div>
            }
          </div>
        </Fade>
        <BottomNavigation value={value} onChange={handleChange} className={classes.bottomNavRoot}>
          <BottomNavigationAction label="Projects" value="projects" icon={<ProjectsIcon />} />
          <BottomNavigationAction label="Skills" value="skills" icon={<SkillsIcon />} />
          <BottomNavigationAction label="About" value="about" icon={<AboutIcon />} />
          <BottomNavigationAction label="Contact" value="contact" icon={<ContactIcon />} />
        </BottomNavigation>
      </div>        
      
    </div>
  );
}

export default Home;