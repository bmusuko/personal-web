import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';

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
        marginLeft: 'auto',
        color:"#f5f5f5",
        fontWeight:"bolder",
    },
  }));


function Header() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar position="static" color="transparent" elevation={0}>
                <Grid container>
                    <Grid item>
                    <Toolbar>
                        <Typography variant="h5" className={classes.title}>
                            Bram Musuko
                        </Typography>
                    </Toolbar>
                    </Grid>
                    <Grid item>
                        <Toolbar>
                            <Typography variant="h5" className={classes.rightToolbar}>
                                About
                            </Typography>
                        </Toolbar>
                    </Grid>
                </Grid>
            </AppBar>
        </React.Fragment>
    );
}


export default Header;