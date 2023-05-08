import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TitlebarImageList from '../../Components/RoomCard'

import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        height: '100vh',
        position: 'relative',
        borderRadius: '0px',

    },
    media: {
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',


    },
    overlay: {
        backgroundColor: 'tranparent',
        width: '100%',
        height: '100vh',
        color: 'white',
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 15.31%, rgba(0, 0, 0, 0.5) 100%)',
        // backgroundColor: 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.5) 15.31%, rgba(0, 0, 0, 0.5) 100%)',
    }

});

const ImageCard = ({ props }: any) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div
                className={classes.media}
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551963831-b3b1ca40c98e')` }}
            >
                <div className={classes.overlay}>
                    <Typography variant="h1" >
                        propsss.heading
                    </Typography>
                    <TitlebarImageList/>
                    {/* <Button >{props.carouselCta.linkText}</Button> */}
                </div>
            </div>
        </Card>
    );
}

export default ImageCard
