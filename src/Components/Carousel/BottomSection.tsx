import { Grid, Hidden, Paper } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import FlatwareIcon from '@mui/icons-material/Flatware';
import { Divider } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    textAlign: 'left',
    top: 'unset',
    position: 'relative',
    // marginTop: '150px',
    // marginLeft: '164px',
    // marginRight: '40px',
    // padding: '65px'


  },
  container: {
    width: '100%',
    paddingLeft: '165px',


  },
  paper: {
    width: '90%',
    color: 'white',
    boxShadow: 'none',
    display: 'flex',
    paddingTop: '60px',
    backgroundColor: 'transparent',
  },

  divider: {
    width: '37px',
    height: '1px',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    marginTop: '30px',
    border: '3px solid #FFCC00',
    borderRadius: '5px',
    backgroundColor: '#FFCC00',
  },

  heading: {
    textAlign: 'center',
    height: '48px',
    marginTop: '30px',

    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: '32px',
    lineHeight: '48px',
  },

  icon: {
    width: '60px',
    height: '60px',
    color: '#F7CB19'
  },
  subTitle: {
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: '20px',
    lineHeight: '30px'
  },
  description: {
    width: '289px',
    height: '69px',
    color: '#D9D9D9',
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontSize: '15px',
    lineHeight: '22px',

  }

}));

const BottomContent: React.FC<any> = ({ bottomHeading, bottomContent }) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>

      {/* Show the three sections only on larger screens */}
      <Hidden xsDown={true}>
        <Typography variant={'h6'} color={'white'} className={classes.heading} fontWeight={600}>
          {bottomHeading}
        </Typography>

        <Divider className={classes.divider} />

        <Grid container   className={classes.container} >
          {bottomContent.map((item: any, key: any) => {
            return (
              <>
                <Grid item sm={4} >
                  <Paper className={`${classes.paper} `}>

                    <FlatwareIcon className={classes.icon} />
                    <div >
                      <Typography key={key} className={classes.subTitle} fontWeight={700}>
                        {item.subTitle}
                      </Typography>

                      <Typography key={key} className={classes.description} fontWeight={700}>
                        {item.description}
                      </Typography>

                    </div>
                  </Paper>
                </Grid>
              </>
            )

          })}
        </Grid>
      </Hidden>


    </div >
  );
}

export default BottomContent