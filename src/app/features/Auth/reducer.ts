import {RootState} from './../../../redux/config-store';
import {IUserProfile} from './../../services/models/User.model';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type AuthState = {
  profile: IUserProfile | null;
};

const initialState: AuthState = {
  profile: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<IUserProfile>) => {
      state.profile = action.payload;
    },
  },
});

export const UserProfileSelector = (state: RootState) => state.auth.profile;
export const authAction = authSlice.actions;
export default authSlice.reducer;
