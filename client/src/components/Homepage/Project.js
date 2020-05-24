import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import colors from '../../static/dracula';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
  
const classes = {
    project: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        color: colors.Foreground,
        fontWeight: 'bolder',
    },
}


/*
Card content :
Title 
Date
description
stack used :
github link :  
*/

function Project(){
    const bull = <span style={classes.bullet}>•</span>;

    
    return(
        <React.Fragment>
            <Typography variant="h4" style={classes.project}>
                Project
            </Typography>
            {/* <Slider {...settings}>
            <Card style={classes.root}>
      <CardContent>
        <Typography style={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography style={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </Slider> */}
        </React.Fragment>
    )
}

 export default Project;
 

