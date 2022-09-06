import {combineReducers} from 'redux';
import homeReducer from '@/app/features/HomePage/reducer';
import authReducer from '@/app/features/Auth/reducer';

export default combineReducers({
  test: homeReducer,
  auth: authReducer,
});
