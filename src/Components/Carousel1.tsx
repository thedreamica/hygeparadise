import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { PlayArrow } from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    margin: 'auto',
  },
  media: {
    height: 250,
    
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

var items = [
    {
        title: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        image:'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
    },
    {
        title: "Random Name #2",
        description: "Hello World!",
        image:'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
    },
    {
        title: "Random Name #2",
        description: "Hello World!",
        image:'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
    }
]

const ImageTextButtonCarousel = () => {
  const classes = useStyles();

  return (
    <Carousel 
    autoPlay={false}
    indicatorContainerProps={{
        style: {
            // marginRight: '100px',
            position: 'absolute',
            marginTop: '-50px', // 5
            // textAlign: 'right', // 4
            // border: '1px solid white',
        }

    }}
    animation="slide">
      {items.map((item, index) => (
        <Card key={index} className={classes.root}>
          <CardMedia className={classes.media} image={item.image} title={item.title} />
          <CardContent className={classes.content}>
            <Typography variant="h5" component="h2" className={classes.title}>
              {item.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {item.description}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<PlayArrow />}
              className={classes.button}
            //   href={item.link}
            >
              Play Now
            </Button>
          </CardContent>
        </Card>
      ))}
    </Carousel>
  );
};

export default ImageTextButtonCarousel;
