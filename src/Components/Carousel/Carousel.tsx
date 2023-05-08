import React from 'react';
import CustomCarouselIndicator from './CarouselIndicator';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Carousel from 'react-material-ui-carousel'
import ImageCard from './CarouselCard';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  carousel: {
    height: '100vh',
    position: 'relative'
  },

  nextIcon: {
    fontSize: '70'
  },

});




const CustomCarousel = (props: any) => {
  const classes: any = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))



  return (
    <>
      <Carousel
        sx={classes.carousel}
        className=''
        autoPlay={false}
        NextIcon={<ArrowForwardIcon id='Next-arrow'  />}
        PrevIcon={<ArrowBackIcon id='Prev-arrow'/>}
        animation="fade"
        navButtonsAlwaysVisible={true}
        IndicatorIcon={<CustomCarouselIndicator className={classes.indicator} />}
        activeIndicatorIconButtonProps={{
          style: {
            backgroundColor: '#fff',
            border: '1px solid #fff',
            borderRadius: '50%',
            width: 10,
            height: 10,
            zIndex: '2',
            margin: '0 10px'
          }
        }}
        indicatorContainerProps={{
          style: {
            zIndex: '2',
            marginTop: isMobile ? '-59px' : '-412px',
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'absolute',
          }
        }}
      >
        {props.carousel.map((item: any, index: any) => (
          <ImageCard
            props={item}
            key={index}
            currentIndex={index}
            totalIndex={props.carousel.length}
            isMobile={isMobile} />
        ))}

      </Carousel>
    </>
  );
};

export default CustomCarousel
