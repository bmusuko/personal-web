import React from 'react';
import Header from '../../components/layout/header'
import Image from '../../assets/japannight.jpg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AvatarUrl from '../../assets/ava.jpg';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Experience from '../../components/Homepage/Experience'
import Project from '../../components/Homepage/Project';
import colors from '../../static/dracula';
// import Footer from '../../components/layout/footer';
import Typewriter from 'typewriter-effect';
import './index.css';

const styles = {
    paperContainer: {
        background:`linear-gradient(0deg, rgba(54, 54, 54, 0.9), rgba(54, 54, 54, 0.9)), url(${Image}) no-repeat center center fixed`,
        maxWidth: '100%',
        height: '100vh',  
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    gridContainer: {
        height:'100%',
        flexGrow:1,
    },
    textColor :{
        color: colors.Foreground,
        fontWeight: 'bolder'
    },
    icon :{
        color: colors.Foreground,
        paddingBottom:'3rem',
        textAlign:'center',
        fontSize: 40
    },
    center:{
        textAlign:'center'
    },
    left:{
        textAlign:'left',
        paddingLeft:'3rem'
        
    },
    right:{
        textAlign:'right',
        paddingRight:'3rem'

    },
    maxWidth:{
        width:'100%',
    },
    paperAbout: {
        background: colors.Background,
    },
    large: {
        width: '200px',
        height: '200px',
        margin:'auto',
        marginTop: '3rem'
    },
    description: {
        margin:'auto',
        marginTop: '0.5rem',
        maxWidth:'36rem',
        paddingLeft: '1.25rem',
        paddingRight: '1.25rem',
        color: colors.Foreground,
        fontWeight: 'normal',
        textAlign:'center',
        fontSize: '1.25rem',
        marginBottom: '2rem'
    },
    about: {
        margin:'auto',
        marginTop: '1rem',
        color: colors.Foreground,
        fontWeight: 'bolder',
        textAlign:'center',
        fontSize: '1.5rem'
    },
    project: {
        paddingTop: '1rem',
        color: colors.Background,
        fontWeight: 'bolder',
    },
    paperExperience:{
        background:colors.Background,
        paddingBottom:"3rem"
    },
    paperProject:{
        background:colors.Background,
        paddingBottom:"3rem",
        marginBottom:"-2rem"
    },
    // paperFooter:{
    //     background:colors.Selection,
    //     paddingBottom:"3rem",
    // }
};

const description = `I'm a Computer Science student who currently studying in the third year at Institut Teknologi Bandung. Highly passionate about technology especially programming. I'm currently interested in Node JS and React JS`
const typewriterOption = {
    strings: ['Computer Science Student', 'Software Developer Intern'],
    autoStart: true,
    loop: true,
}
function Homepage(){
    return(
        <React.Fragment>
            <Paper square style={styles.paperContainer}>
            <Container maxWidth="lg" style={styles.gridContainer}>

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
                        <Typewriter
                            options={typewriterOption}
                            />
                    </Grid>
                    <Grid item sm={12} style={styles.maxWidth}>
                        <Grid
                        container
                        direction="row"
                        style={styles.gridContainer}
                        justify="space-between"
                        alignItems="flex-end"
                        >
                            <Grid item sm={4} xs={4} style={styles.left}>
                                <a href="https://twitter.com/bmusuko" target="_blank" rel="noopener noreferrer">
                                    <TwitterIcon style={styles.icon} />
                                </a>
                            </Grid>
                            <Grid item sm={4} xs={4} style={styles.center}>
                                <a href="https://www.linkedin.com/in/bram-musuko-panjaitan-64410916a" target="_blank" rel="noopener noreferrer">
                                    <LinkedInIcon style={styles.icon} />
                                </a>
                            </Grid>
                            <Grid item sm={4} xs={4} style={styles.right}>
                                <a href="https://github.com/bmusuko/" target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon style={styles.icon} />
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </Container>
            </Paper>
            <Paper square style={styles.paperAbout} id="about">
                <Grid
                    container
                    direction="row"
                    alignItems="stretch">  
                    <Grid item sm={12} justify="center" style={styles.maxWidth}>
                        <Avatar alt="Remy Sharp" src={AvatarUrl} style={styles.large} justify="center" />
                    </Grid>
                    <Grid item sm={12} justify="center" style={styles.maxWidth}>
                    <p variant="display" style={styles.about}>
                            Hello there!         
                        </p> 
                        <p variant="display" style={styles.description}>
                            {description}         
                        </p>                   
                     </Grid>
                </Grid>
            </Paper>
            <Paper square style={styles.paperExperience} id="experience">
                <Container maxWidth="lg" >
                    <Experience />
                </Container>
            </Paper>
            <Paper style={styles.paperProject} square id="project">
                <Container maxWidth="lg" >
                    <Project />
                </Container>
            </Paper>
            <Paper style={styles.paperFooter} square id="footer">
                <Container maxWidth="lg" >
                    {/* <Footer /> */}
                </Container>
            </Paper>
        </React.Fragment>
    )
}

export default Homepage;

// justify="space-between"

