import React, { useEffect } from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import MyContentLoadingError from 'src/views/Component/Card/MyContentLoadingError';
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from 'src/redux/slices/backEnd/backEnd';
import UserItem from 'src/views/Component/List/UserItem';
// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {}
}));

// ----------------------------------------------------------------------

function HomeView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { utente } = useSelector((state) => state.backEnd);
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch])

  return (
    <Page title="Spindox Test" className={classes.root}>
      <Container maxWidth="xl">
        <MyContentLoadingError showLoadingBackEnd={false} showCard={false} showErrorInPopUp={false} showError={false} >
          {utente ?
            <Grid key={utente.id} item xs={12} sm={12} md={12}>
              <UserItem user={utente} />
            </Grid>
            : null
          }
        </MyContentLoadingError>
      </Container>
    </Page>
  );
}
export default HomeView;
