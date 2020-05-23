import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      color:"#f5f5f5",
      fontWeight:"bolder",
      marginRight: 16,
      marginLeft: -12,    
    },
    rightToolbar: {
        color:"#f5f5f5",
        marginRight:30,
        fontWeight:"bold",
    },
    anchor: {
        textDecoration:"none",
        outline: "0"
    },
  }));


function Header() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar position="static" color="transparent" elevation={0}>
                <Grid 
                container   
                justify="space-around"
                alignItems="flex-start">
                    <Grid item>
                    <Toolbar>
                        <Typography variant="h5" className={classes.title}>
                            Bram Musuko
                        </Typography>
                    </Toolbar>
                    </Grid>
                    <Grid item>
                        <Toolbar>
                            <AnchorLink href='#about' className={classes.anchor}>
                                <Typography variant="subtitle1" className={classes.rightToolbar}>
                                    About Me
                                </Typography>
                            </AnchorLink>
                            <AnchorLink href='#experience' className={classes.anchor}>
                                <Typography variant="subtitle1" className={classes.rightToolbar}>
                                    Experience
                                </Typography>
                            </AnchorLink>
                        </Toolbar>
                    </Grid>
                </Grid>
            </AppBar>
        </React.Fragment>
    );
}


export default Header;