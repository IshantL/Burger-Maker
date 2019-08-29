import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
 
function Home(props) {
  return (
    <div>
        <Typography variant="h5" component="h3">
          Welcome Home!
        </Typography>
    </div>
  );
}
 
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
 
export default Home;