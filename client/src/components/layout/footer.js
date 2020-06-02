import React from 'react';
import Typography from '@material-ui/core/Typography';
import colors from '../../static/dracula';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = {
    footerText:{
        color:colors.Foreground,
        paddingLeft:'1rem'
    },
    footerText2:{
        paddingRight:'1rem',
        color:colors.Foreground,
    },
    loveIcon:{
        fontSize:'0.8rem',
        color:colors.Red,
    }
}

function Footer(){
    return(
        <React.Fragment>
            <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            >
                <Grid item>
                    <Typography variant="subtitle2" style={styles.footerText}>
                        Built with <FavoriteIcon style={styles.loveIcon}/> in the midst of pandemic
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle2" style={styles.footerText2}>
                        © {new Date().getFullYear()}
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Footer;