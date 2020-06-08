import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

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
    paddingTop: '1rem'
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
        <div style={{marginLeft: '7rem'}}>
          <h1>AJ Adversalo</h1>
          <h2>Software developer</h2>
          <hr/>
        </div>
        
        <div style={{position: 'fixed', left: 0, top: 0, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div style={{paddingLeft: '1rem'}}>
            <p>AJ</p>
          </div>
          <div>
            <ul>
              <li className={classes.categoryItems}>Projects</li>
              <li className={classes.categoryItems}>Edcation</li>
              <li className={classes.categoryItems}>Skills</li>
              <li className={classes.categoryItems}>About</li>
              <li className={classes.categoryItems}>Contact</li>
            </ul>
          </div>
          <div>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <ListItemIcon>
                  <AccountBoxIcon/>
                </ListItemIcon>
              </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <AccountBoxIcon/>
                  </ListItemIcon>
                </ListItem>
            </List>
          </div>
        </div>
    
    </div>
  );
}

export default App;
