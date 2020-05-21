import React, {useState} from 'react';
import Image from '../../assets/japannight.jpg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ToastContainer} from 'react-toastify';
// import Notification from '../../utils/Notification';
// import { useHistory } from "react-router-dom";

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
    // const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Notification.success('Registration Success');
        console.log(name,email,password);
        if (name && email && password){
            
        }
        // history.push('/login');
    }


    return(
        <React.Fragment>
            <ToastContainer />
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
                                onChange = { (e) => setName(e.target.value) }
                            />
                            <br />
                            <TextField
                                required
                                id="form-email-input"
                                label="email"
                                variant="filled"
                                style={styles.inputField}
                                onChange = { (e) => setEmail(e.target.value) }
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
                                onChange = { (e) => setPassword(e.target.value) }
                            />
                        </form>
                        <Button variant="contained" color="primary" style={styles.buttonField} onClick={handleRegister}>
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