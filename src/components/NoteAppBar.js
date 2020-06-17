import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Blue from '@material-ui/core/colors/blue'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    position: 'relative'
  },
  title: {
     flex: '0 1 auto',
     position: 'absolute',
     left: '50%',
     transform: 'translateX(-50%)'

  },
  iconButton: {
    flex: '0 1 auto',
    marginLeft: 'auto'
    }
}));




 function NoteAppBar() {
  const classes = useStyles();

  return (
       <React.Fragment>
      <AppBar position="fixed" elevation={1}>
        <Toolbar variant="dense">
          <Box className={classes.root}>
          <Typography variant="h5" className={classes.title}>
            Notes
          </Typography>
          <IconButton className={classes.iconButton}>
          <AddCircleIcon style={{color: Blue[500] ,fontSize: 55}} />
          </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      </React.Fragment>
    );
}

export default NoteAppBar