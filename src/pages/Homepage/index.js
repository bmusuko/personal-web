import React from 'react';
import Header from '../../components/layout/header'
import Image from '../../assets/japannight.jpeg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const styles = {
    paperContainer: {
        // backgroundImage: `url(${Image})`,
        background:`linear-gradient(0deg, rgba(54, 54, 54, 0.9), rgba(54, 54, 54, 0.9)), url(${Image}) no-repeat center center fixed`,
        maxWidth: '100%',
        height: '100vh',  
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    gridContainer: {
        height:'100%',
        flexGrow:1,
        // backgroundColor:"rgba(255,0,0)"
    },
    textColor :{
        color: '#f5f5f5',
        fontWeight: 'bolder'
    },
    icon :{
        color: '#f5f5f5',
        paddingBottom:'3vh',
        textAlign:'center',
        fontSize: 40
    },
    center:{
        textAlign:'center'
    },
    maxWidth:{
        width:'100%',
    }
};


function Homepage(){
    return(
        <React.Fragment>
            <Paper style={styles.paperContainer}>
                <Grid
                    container
                    direction="row"
                    style={styles.gridContainer}
                    alignItems="stretch">  
                    <Grid item sm={12} style={styles.maxWidth}>
                        <Header />
                    </Grid>
                    <Grid item sm={12} justify="center">
                        <Typography variant="h5" align="center" style={styles.textColor}>
                           I'm a
                        </Typography>
                        <Typography variant="h2" align="center" style={styles.textColor}>
                           Computer Science Student
                        </Typography>``
                    </Grid>
                    <Grid item sm={12} style={styles.maxWidth}>
                        <Grid
                        container
                        direction="row"
                        style={styles.gridContainer}
                        justify="space-around"
                        alignItems="flex-end"
                        >
                            <Grid item sm={4} xs={4} style={styles.center}>
                                <a href="https://twitter.com/bmusuko" target="_blank" rel="noreferrer">
                                    <TwitterIcon style={styles.icon} />
                                </a>
                            </Grid>
                            <Grid item sm={4} xs={4} style={styles.center}>
                                <a href="https://www.linkedin.com/in/bram-musuko-panjaitan-64410916a" target="_blank" rel="noreferrer">
                                    <LinkedInIcon style={styles.icon} />
                                </a>
                            </Grid>
                            <Grid item sm={4} xs={4} style={styles.center}>
                                <a href="https://github.com/bmusuko/" target="_blank" rel="noreferrer">
                                    <GitHubIcon style={styles.icon} />
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <div>
                <h1>Hello boi</h1>
            </div>
        </React.Fragment>
    )
}

export default Homepage;

// justify="space-between"