import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.spacing(1),
    backgroundColor: '#f5f5f5',
  },
  cardMedia: {
    paddingTop: '100%', // Adjust this value to control the image height
  },
  cardContent: {
    flexGrow: 1,
  },
  heading: {
    background: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    padding: theme.spacing(2),
  },
}));

const GridCard = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://i.imgur.com/QT7qtdM_d.webp?maxwidth=760&fidelity=grand"
          title="Image Title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.heading}>
            heading
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default GridCard;
