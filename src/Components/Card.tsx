import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@mui/material';
import Typography from './Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    height: '100vh',
    borderRadius: '0px'
  },
  media: {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: '10px',
  },
});

const ImageCard = ({props}: any) => {
  
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div
        className={classes.media}
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551963831-b3b1ca40c98e')` }}
      >
        <div className={classes.overlay}>
          <Typography variant="h1" markdown={props.heading} color='white'/>
         
          <Button >{props.carouselCta.linkText}</Button>
        </div>
      </div>
    </Card>
  );
}

export default ImageCard
