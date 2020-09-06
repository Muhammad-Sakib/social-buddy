import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  Link,
} from "react-router-dom";
const useStyles = makeStyles({
  root: {
    width: 400,
    height: 500,
    display: 'inline-block',
    margin: '10px',
    boxShadow: '5px 5px 6px 0 rgba(0, 0, 0, 0.15),-4px -4px 8px 0 rgba(255, 255, 255, 0.1)',
    backgroundColor: '#36485C',
    color: 'orange',
  },
  bold: {
      fontSize: 20,
      fontWeight: 'bolder',
  },
  img: {
      borderRadius: '50%',
      marginLeft: '100px',
  },
});

const Posts = (props) => {
  const classes = useStyles();
    
        
  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardContent >
        <img className={classes.img} src={`https://randomuser.me/api/portraits/women/${props.No}.jpg`}/>
        <Typography gutterBottom variant="h5" component="h2" align="left">
            Post No.{props.No}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" align="left">
            Post title: {props.title}
          </Typography>
          <Typography  component="h4" align="left">
            <b>Post Caption:</b> <i>{props.body}</i>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={'/'+props.No}>
            <Button size="medium" variant="contained" color="secondary">
             View Detail
            </Button>
        </Link>
      </CardActions>
    </Card>
  );
}


export default Posts;