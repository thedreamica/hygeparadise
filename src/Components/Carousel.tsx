import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';

function Example() {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
    return (
        <Carousel 
            key={1}
            autoPlay={false}
            navButtonsAlwaysVisible={true}
            // navButtonsAlwaysInvisible={false}
            // IndicatorIcon={true}
            swipe={true}
            indicators={true}
            // indicatorContainerProps={{
            //     style: {
            //         position: 'absolute',
            //         marginTop: "-50px"
            //     },
            // }}
            // indicatorIconButtonProps={{
            //     style: {
            //         border: '1px solid white',
            //         padding: '5px',
            //         margin: 'auto',   // 1
            //         color: 'white'       // 3
            //     }
            // }}
            // activeIndicatorIconButtonProps={{
            //     style: {
            //         backgroundColor: 'black',
            //         border: '1px solid white',
            //         borderRadius: 'red' // 2
            //     }
            // }}
            indicatorContainerProps={{
                style: {
                    // marginRight: '100px',
                    marginTop: '-50px', // 5
                    // textAlign: 'right', // 4
                    // border: '1px solid white',
                }

            }}
        // indicatorContainerProps={{style: {display: 'flex', }}}
        >
            {items.map((item, key) => {
                return (
                    <>
                        {/* <Paper sx={{ width: `100vh`, height: `${100}vh` }}> */}
                        <CardMedia
                            height={'1000'}
                            key={key}
                            component="img"
                            image={'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'}
                            alt={'altText'}
                            
                        />
                        {item.name}
                        {/* </Paper> */}
                        {/* //     <h2>{item.name}</h2>
                    //     <p>{item.description}</p>

                    //     <Button className="CheckButton">
                    //         Check it out!
                    //     </Button>
                    // </Image> */}
                    </>
                )

            })}

        </Carousel>
    )
}

export default Example