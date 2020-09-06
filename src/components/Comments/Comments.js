import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 0,
  },
  list: {
    padding: '5px 20px 5px 20px',
    borderBottom: '1px solid black',
    borderTop: '1px solid black',
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
   graycomnt: {
       color: 'dimgray',
       fontSize: '20px',
       margin: '0px 40px 0px 40px'
   } 
}));



const Comments = (props) => {
    
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper square className={classes.paper}>
        
        <List className={classes.list}>
          {
            <React.Fragment >
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={`https://randomuser.me/api/portraits/women/${props.id}.jpg`}/>
                </ListItemAvatar>
                <ListItemText primary={props.name} secondary={props.email} />
              </ListItem>
             <h4>Comment:</h4> 
             <p className={classes.graycomnt}><i>{props.body}</i></p>
            </React.Fragment>
        }
        </List>
      </Paper>
    </React.Fragment>
  );
}
export default Comments;