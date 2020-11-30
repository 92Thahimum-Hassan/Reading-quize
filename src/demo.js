import React,{ useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Settings from './settings';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const goToSettings = (bool) => {
    //setShowText(false);
    setShowSettings(bool);
    setOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClickOpen();
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Settings
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Settings"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to be redirected to settings?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => goToSettings(true)} color="primary">
            Yes
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
      { showSettings && (<Settings />) }
    </div>
  );
}
