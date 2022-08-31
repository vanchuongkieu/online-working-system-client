import {combineReducers} from 'redux';
import homeReducer from '@/app/features/HomePage/reducer';

export default combineReducers({
  test: homeReducer,
});
