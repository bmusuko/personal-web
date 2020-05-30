import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import colors from '../../static/dracula';
import './Project.css'
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import projectData from '../../static/project';
import Tilt from 'react-parallax-tilt';

const styles = {
    project: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        color: colors.Foreground,
        fontWeight: 'bolder',
        justifyContent:"center",
    },
    card:{
      color: "black",
      marginTop:'3rem',
      marginRight:"1rem",
      minHeight:'150px'
    },
    slider:{
      maxWidth:'500px',
      margin:'auto',
      paddingLeft:'2rem',
      paddingRight:'2rem',
    },
    cardTitle:{
      color: colors.Background,
    },
    cardGit:{
      color: colors.Background,
      marginTop:'4px'
    },
    gitIcon: {
      fontSize: 24,
      marginRight:'1rem'
  }
}

const projectCard = projectData.map((project)=>{
  return(
    <Grid item md={6} xs={12}>
      <Tilt
          scale={1.1}
          transitionSpeed={2500}
      >
        <Card style={styles.card} className="card">
          <CardContent>
            <Typography  variant="h6" style={styles.cardTitle}>
              {project.title}
            </Typography>
            <Typography  variant="body2" style={styles.cardTitle}>
              {project.description}
            </Typography>
            <Typography  variant="subtitle2" style={styles.cardTitle}>
              Stack : {project.stack}
            </Typography>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item>
                <GitHubIcon style={styles.gitIcon}/>
              </Grid>
              <Grid item>
                <Typography  variant="body2" style={styles.cardGit}>
                  {project.github === '' ? '-' : <a href={project.github} target="_blank" rel="noopener noreferrer">{project.github}</a>}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Tilt>
    </Grid>
)})

function Project(){
  
    return(
        <React.Fragment>
            <Typography variant="h4" style={styles.project}>
                Project
            </Typography>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              {projectCard}              
            </Grid>
        </React.Fragment>
    )
}

 export default Project;
 

