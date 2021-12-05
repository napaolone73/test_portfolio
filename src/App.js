import React from 'react';
import { ThemeConfig } from './theme';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { store, persistor } from './redux/store';
import routes, { renderRoutes } from 'src/routes';
import ScrollToTop from 'src/components/ScrollToTop';
import LoadingScreen from 'src/components/LoadingScreen';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import { PersistGate } from 'redux-persist/lib/integration/react';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';

// ----------------------------------------------------------------------

const history = createBrowserHistory();


// const maskMap = {
//   it: '__/__/____'
// };
function App() {
  return (    
      <Provider store={store}>
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
          <ThemeConfig>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Router history={history}>
                    <ScrollToTop />                 
                    {renderRoutes(routes)}
                </Router>
            </LocalizationProvider>
          </ThemeConfig>
        </PersistGate>
      </Provider>     
  );
}

export default App;
