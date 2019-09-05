import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



function Footer(props) {

    return (
        <footer>
            <Paper elevation={1}>
                <Typography variant="h5" component="h3">
                    Sandwitch Maker App
        </Typography>
                <Typography component="p">
                    @2019 All right reserved
        </Typography>
            </Paper>
        </footer>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Footer;