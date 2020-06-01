import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import colors from '../../static/dracula';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    title: {
      color:colors.Foreground,
      fontWeight:"bolder",    
    },
    rightToolbar: {
        color:colors.Foreground,
        marginRight:"2rem",
        fontWeight:"bold",
    },
    anchor: {
        textDecoration:"none",
        outline: "0"
    },
    menuIcon:{
        fontSize:'1.5rem',
        color:colors.Foreground
    }
  }));


function Header() {
    const classes = useStyles();
    return (
        <React.Fragment>

            <AppBar position="static" color="transparent" elevation={0}>
                <Grid 
                container   
                justify="space-between" 
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
                            <Hidden smDown>
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
                                <AnchorLink href='#project' className={classes.anchor}>
                                    <Typography variant="subtitle1" className={classes.rightToolbar}>
                                        Project
                                    </Typography>
                                </AnchorLink>
                            </Hidden>
                            <Hidden mdUp>
                                <IconButton>
                                    <MenuIcon className={classes.menuIcon} />
                                </IconButton>
                            </Hidden>
                        </Toolbar>
                    </Grid>
                </Grid>
            </AppBar>
        </React.Fragment>
    );
}


export default Header;