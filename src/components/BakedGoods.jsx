import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import './About.css'


import image from '../assets /pie_1.jpg';
import image2 from '../assets /pie_2.jpg';
import image3 from '../assets /pie_3.jpg';
import image4 from '../assets /pie_4.jpg';
import image5 from '../assets /pie_5.jpg';
import image6 from '../assets /pie_6.jpg';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 700,
    height: 550,
  },

  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const tileData = [
  {
    img: image,
    title: 'good1',
    price: 34
  },
  {
    img: image2,
    title: 'good2',
    price: 34

  },
  {
    img: image3,
    title: 'good3',
    price: 34

  },
  {
    img: image4,
    title: 'good4',
    price: 34

  },
  {
    img: image5,
    title: 'good5',
    price: 34
  },
  {
    img: image6,
    title: 'good6',
    price: 34


  },
];
const BakedGoods = () => {
  const classes = useStyles();




  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>$ {tile.price}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
export default BakedGoods;