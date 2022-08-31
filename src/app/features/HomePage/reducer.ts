import {createSlice} from '@reduxjs/toolkit';

type HomeState = {};

const initialState: HomeState = {};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
});

export default homeSlice.reducer;
