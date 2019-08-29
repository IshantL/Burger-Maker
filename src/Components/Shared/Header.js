import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    InputBase,
    Typography,
  } from '@material-ui/core';
  import MenuIcon from '@material-ui/icons/Menu';
  import SearchIcon from '@material-ui/icons/Search';
  import PropTypes from 'prop-types';
  import { withStyles } from '@material-ui/core/styles';
  import { fade } from '@material-ui/core/styles/colorManipulator';
   
  class Header extends React.Component {
    render() {

    return (<AppBar position="static">
       <Toolbar>
            <IconButton color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Sandwitch Maker
            </Typography>
          </Toolbar>
    </AppBar>
    );
  }
  }
   
  Header.propTypes = {
    classes: PropTypes.object.isRequired,
  };
   
  export default Header;