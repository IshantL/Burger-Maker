import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
 
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  }
});
 
function Footer(props) {
  const { classes } = props;
 
  return (
    <footer className={classes.footer}>
      <Paper className={classes.root} elevation={1}>
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
 
export default withStyles(styles)(Footer);