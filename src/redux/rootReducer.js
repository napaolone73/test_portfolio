import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import settingsReducer from './slices/settings';
import backEndReducer from './slices/backEnd/backEnd';
// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  keyPrefix: 'redux-',
  whitelist: ['settings']
};
const rootReducer = combineReducers({
  settings: settingsReducer,
  backEnd: backEndReducer
});

export { rootPersistConfig, rootReducer };
