import React from 'react';
import CustomCarouselIndicator from './CarouselIndicator';
import Carousel from 'react-material-ui-carousel'
import ImageCard from './CarouselCard';


const CustomCarousel = (props: any) => {

  return (
    <>
      <Carousel
        className=''
        autoPlay={true}
        animation="fade"
        sx={{ height: '100vh' }}
        navButtonsAlwaysVisible={true}
        IndicatorIcon={<CustomCarouselIndicator />}
        activeIndicatorIconButtonProps={{
          style: {
            backgroundColor: '#fff',
            border: '1px solid #fff',
            borderRadius: '50%',
            width: 15,
            height: 15,
            // margin: '0 -1px',
          }
        }}
        indicatorContainerProps={{
          style: {
            marginTop: '-50px',
          }
        }}
      >
        {props.carousel.map((item: any, index: any) => (
          <ImageCard props={item} key={index} />
        ))}

      </Carousel>
    </>
  );
};

export default CustomCarousel
