import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  inactiveButton: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid #fff',
    borderRadius: '50%',
    width: 10,
    height: 10,
    margin: '1 1px',
    '&:hover': {
      backgroundColor: '#fff',
    },
  },

});

const CustomCarouselIndicator = ({ props }: any) => {

  const classes = useStyles();

  return (
    <button
      className={classes.inactiveButton
      }
      {...props}
    />
  );
}

export default CustomCarouselIndicator
