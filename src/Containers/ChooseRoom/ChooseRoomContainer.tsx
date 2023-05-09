import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '../../Components/RoomCard'

import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        height: '100%',
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
    },
    


    heading: {
        paddingTop: '150px',
        textAlign: 'center',
        marginleft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontSize: '40px',
        lineHeight: '60px',
        letterSpacing: '0.275em',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.13)',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '112px',
            fontSize: '20px',
            height: '35px'
          }
    },

    list: {
        marginTop: '150px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '50px'
          }
    }

}));

const ImageCard = ({ heading }: any) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div
                className={classes.media}
                style={{ backgroundImage: `url('https://i.imgur.com/tSI532Z_d.webp?maxwidth=760&fidelity=grand')` }}
            >
                <div className={classes.overlay}>
                    <Typography variant="h1" className={classes.heading} >
                        {heading}
                    </Typography>
                    <div className={classes.list}>
                    < ImageList />
                    </div>
                    
                </div>
            </div>
        </Card>
    );
}

export default ImageCard
