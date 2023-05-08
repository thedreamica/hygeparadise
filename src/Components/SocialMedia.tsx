import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';

const useStyles = makeStyles({
    socialMediaIcons: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '1px'
       
    },
    icon: {
        fontSize: '12px' 
    },
    socialLabel: {
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        fontSize: '12px',
        transform: 'translate(-50%, 50%) rotate(-180deg)',
        marginLeft: '5px'
       
    },
});

function MyComponent() {
    const classes = useStyles();

    return (
        <div className={classes.socialMediaIcons}>
            <IconButton className={classes.icon}>
                <FacebookIcon />
            </IconButton>
            <IconButton className={classes.icon}>
                <TwitterIcon />
            </IconButton>
            <IconButton className={classes.icon}>
                <InstagramIcon />
            </IconButton>
            <div className={classes.socialLabel}>Social</div>
        </div>
    );
}

export default MyComponent
