import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/router';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '40px',
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      height: '25px',
      width: '200%',
    }

  },
  button: {
    display: 'flex',
    fontFamily: 'Montserrat',
    backgroundColor: 'white',
    color: '#000',
    fontWeight: 'bold',
    boxShadow: 'none',
    borderRadius: '50px',
    fontSize: '16px',
    border: '0.5px solid #000',
    '&:hover': {
      backgroundColor: 'white',
      boxShadow: 'none',
    },

    [theme.breakpoints.down('sm')]: {
      height: '25px',
      fontSize: '10px',
      paddingLeft: '10px',
      letterSpacing: '0.01em',
      fontWeight: 'bold',
    }
  },

  icon: {
    height: '25px',
    borderRadius: '50px',
    backgroundColor: 'white',
    color: '#000',
    padding: '5px',
    marginLeft: '2px',
    border: '1px solid #000',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1px',
      paddingRight: '1px',
      height: '14px'
    }
  }
}));

interface ButtonWithArrowProps {
  buttonText: string
  link: string
}

const ButtonWithArrow: React.FC<ButtonWithArrowProps> = ({ buttonText, link }) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        disableRipple
        className={classes.button}
        onClick={() => { router.push(link) }}
      >
        {buttonText}
      </Button>
      <ArrowForwardIcon className={classes.icon}
        onClick={() => { router.push(link) }} />
    </div>
  );
}
export default ButtonWithArrow