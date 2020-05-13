import React from 'react';
import Header from '../../components/layout/header'
import Image from '../../assets/japannight.jpeg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = {
    paperContainer: {
        // backgroundImage: `url(${Image})`,
        background:`linear-gradient(0deg, rgba(54, 54, 54, 0.9), rgba(54, 54, 54, 0.9)), url(${Image}) no-repeat center center fixed`,
        maxWidth: '100%',
        height: '100vh',  
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
};


function Homepage(){
    return(
        <React.Fragment>
            <Paper style={styles.paperContainer}>
            <Header />
            <Grid container>
                <Grid item>
                    <h5> Developer </h5>
                </Grid>
                <Grid item>
                    <div>
                        <h3>HEE</h3>
                    </div>
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