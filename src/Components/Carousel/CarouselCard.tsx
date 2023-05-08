import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import BottomContent from './BottomSection';
import ButtonWithArrow from '../ButtonWithArrow';
import PauseIcon from '@mui/icons-material/Pause';


const useStyles = makeStyles((theme) => ({
  root: {
    top: 'unset',
    maxWidth: '100%',
    height: '100vh',
    borderRadius: '0px',
    position: 'relative'
  },

  media: {
    height: '100vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },

  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100vh',
    transform: 'translate(-50%, -50%)',
    background: 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.5) 16.35%, rgba(0, 0, 0, 0.5) 100%)',
    color: 'white',

    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100vh',
      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.43) 100%)',
    }
  },


  heading: {
    position: "absolute",
    marginTop: '-440px',
    width: '100%',
    marginRight: 'auto',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: '120px',
    lineHeight: '180px',
    letterSpacing: '0.275em',
    textShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.13)',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-850px',
      height: '48px',
      fontWeight: '700',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontSize: '32px',
      lineHeight: '48px',
      letterSpacing: '0.275em',
    },

  },

  button: {
    top: '424px',
    left: 'calc(50% - 238px/2 + 9px)',
    position: 'absolute',
    height: '50px',
    [theme.breakpoints.down('sm')]: {
      top: '327px',
      position: 'absolute',
      width: '35%',
      height: '48px',
      left: 'calc(50% - 122.4px/2 + 0.2px)',

    },
  },

  pageNumberSection: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '630px',
    [theme.breakpoints.down('sm')]: {
      height: '564px',
      marginTop: '565px',
    },
  },
  pauseIcon: {
    padding: '10px',
    paddingLeft: '41px',
  },

  activePageNumber: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: '36px',
    marginTop: '3px',
    width: '8px',
    color: '#FFFFFF',
    left: '89px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  totalPageNumber: {
    width: '16px',
    height: '23px',
    marginLeft: '10px',
    marginTop: '14px',
    top: '639px',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: '15px',
    lineHeight: '22px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  bottom: {
    marginTop: '1px',
  }
}));

const CarouselCard = ({ props, currentIndex, totalIndex,  isMobile }: any) => {
  const classes = useStyles();


  const getUrl = (url: any) => {
    return isMobile? `url(${url.mobileImageUrl})` : `url(${url.desktopImage})`
  }
  const getIconColor = () => {
    return currentIndex + 1 === totalIndex ? '#FFCC00' : 'white'
  }

  return (
    <Card className={classes.root}>
      <div
        className={classes.media}
        style={{ backgroundImage: getUrl(props.url) }}
      >

        <div className={classes.overlay}>

          <div className={classes.pageNumberSection}>
            <PauseIcon sx={{ color: getIconColor() }} className={classes.pauseIcon} />
            <>
              <Typography className={classes.activePageNumber} >
                {currentIndex + 1}
              </Typography> <Typography variant="h6" className={classes.totalPageNumber}  >
                /{totalIndex}
              </Typography>
            </>
          </div>

          <Typography variant="h1" className={classes.heading}>
            {props.heading}
          </Typography>


          <div className={classes.button}>
            <ButtonWithArrow buttonText={props.carouselCta.linkText} link={props.carouselCta.link} />
          </div>
          <div className={classes.bottom}>
            <BottomContent {...props} />
          </div>
          {/* </div> */}
        </div>
      </div>
    </Card>
  );
}

export default CarouselCard
