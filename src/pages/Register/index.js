import React from 'react';
import Image from '../../assets/japannight.jpg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


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
    },
    inputField: {
        margin: '10px 30px 10px 30px',
        width: '300px',
    },
    paperForm: {
    },
    text :{
        color: '#333333',
        fontWeight: 'bolder',
        margin: '30px 30px 10px 30px'
    },
    buttonField: {
        margin: '10px 30px 10px 30px',
        width: '300px',
        height: '50px'
    },
    textRedirect : {
        color: '#333333',
        fontWeight: 'bolder',
        margin: '10px 30px 30px 30px'
    }
};


function RegisterPage(){
    return(
        <React.Fragment>
            <Paper style={styles.paperContainer}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={styles.gridContainer}
                >
                    <Paper elevation={24}>
                        <Typography variant="h4" align="center" style={styles.text}>
                            Register Form
                        </Typography>
                        <form noValidate autoComplete="off">
                            <TextField
                                required
                                id="form-name-input"
                                label="Name"
                                variant="filled"
                                style={styles.inputField}
                            />
                            <br />
                            <TextField
                                required
                                id="form-email-input"
                                label="email"
                                variant="filled"
                                style={styles.inputField}
                            />
                            <br />
                            <TextField
                                id="form-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="filled"
                                required
                                style={styles.inputField}
                            />
                        </form>
                        <Button variant="contained" color="primary" style={styles.buttonField}>
                            Submit
                        </Button>
                        <br />
                        <Typography variant="body1" align="center" style={styles.textRedirect} >
                            already have an account?<a href="/login"> login here </a>
                        </Typography>                
                    </Paper>
                </Grid>
            </Paper>
        </React.Fragment>
    )
}

export default RegisterPage;

// justify="space-between"