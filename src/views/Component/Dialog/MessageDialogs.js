import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
  Slide,
  Dialog,
  Button,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText
} from '@material-ui/core';
// ----------------------------------------------------------------------

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
MessageDialogs.propTypes = {
  open:PropTypes.bool,
  title:PropTypes.string,
  description:PropTypes.string,
  btnYESText:PropTypes.string,
  btnNOText:PropTypes.string,
  onBtnOk:PropTypes.func,
  onBtnNO:PropTypes.func,
  showButtonYes:PropTypes.bool
};
function MessageDialogs({open=false,title="Titolo",description="Descrizione Messaggio",btnYESText="SI"
,btnNOText="NO",onBtnOk,onBtnNO
,showButtonYes=true
}) {
  // const [open, setOpen] = useState(openInput);

  // const handleNOClose = () => {
  //   setOpen(false);
  //   onBtnNO();
  // };
  // const handleYESClose = () => {
  //   setOpen(false);
  //   onBtnOk();
  // };
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onBtnNO}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={onBtnNO}>
            {btnNOText}
          </Button>
          {showButtonYes ? 
          <Button variant="contained" onClick={onBtnOk}>
            {btnYESText}
          </Button>
          : null}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MessageDialogs;
