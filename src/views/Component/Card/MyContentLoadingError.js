import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CardContent} from '@material-ui/core';
import LoadingScreen from 'src/components/LoadingScreen';
import { useDispatch, useSelector } from 'react-redux';
import MessageDialogs from 'src/views/Component/Dialog/MessageDialogs';
import { endError } from 'src/redux/slices/backEnd/backEnd';
//--------------------------------------------------
MyContentLoadingError.propTypes = {
  children: PropTypes.node,
  showLoadingBackEnd: PropTypes.bool,  
  showError: PropTypes.bool,  
  showCard: PropTypes.bool  
};
function MyContentLoadingError({children,showLoadingBackEnd = false, showError = false, showCard, ...other }) {

  const dispatch = useDispatch();
  const { isLoadingBackEnd,error } = useSelector((state) => state.backEnd);
  const [showErroriSpecifici, setShowErroriSpecifici] = useState(false);
  const OnShowErroriSpecifici = () => {
    setShowErroriSpecifici(false);
    dispatch(endError());
  }

  if (showError && error && !showErroriSpecifici ) {
      setShowErroriSpecifici(true);
  }

  if (isLoadingBackEnd && showLoadingBackEnd) return (<LoadingScreen />)
  return (
    <>
      <MessageDialogs
        open={showErroriSpecifici}
        title="Ops... c'è un problema!"
        description={error}
        onBtnNO={OnShowErroriSpecifici}
        btnNOText="OK" showButtonYes={false}
      />
      {showCard ?
        <CardContent {...other}>
          {children}
        </CardContent>
        : <>{children}</>
      }
    </>

  );
}
export default MyContentLoadingError;