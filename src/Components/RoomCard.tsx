import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

  imageList: {
    width: 1213,
    height: 612,
    marginLeft: 'auto',
    marginRight: 'auto',
    '&::-webkit-scrollbar': {
      width: 0,
    },
    [theme.breakpoints.down('xs')]: {
      height: 600,
      width: 300,
    }

  },
  paper: {
    height: "568px",
    boxShadow: 'none',
    background: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
    borderRadius: "10px",
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      height: 448,
      width: 302,
    }
  },



}));

export default function TitlebarImageList() {
  const classes = useStyles();
  return (
    <ImageList className={classes.imageList} gap={100}>

      {itemData.map((item) => {
        return (
          <>
            <Paper className={`${classes.paper} `}>
              <ImageListItem key={item.img}
                cols={1}
                rows={1}>

                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{ borderRadius: '10px' }}
                />
                <ImageListItemBar
                  title={item.title}
                  actionPosition='left'
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
              <Stack>
                <Typography variant='h5'> this is heading</Typography>
                <Typography> this is sub heading</Typography>
              </Stack>

            </Paper>
          </>
        )

      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://i.imgur.com/24PTlGB_d.webp?maxwidth=760&fidelity=grand',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://i.imgur.com/24PTlGB_d.webp?maxwidth=760&fidelity=grand',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://i.imgur.com/24PTlGB_d.webp?maxwidth=760&fidelity=grand',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    // cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    // cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    // rows: 2,
    // cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    // rows: 2,
    // cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    // cols: 2,
  },
];
