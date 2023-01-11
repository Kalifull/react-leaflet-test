import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requests: [],
  loadingStatus: true,
  error: null,
};

const requestSlice = createSlice({
  name: 'requestState',
  initialState,
  reducers: {
    fetchRequest(state) {
      state.requests = [];
      state.loadingStatus = true;
      state.error = null;
    },
    fetchRequestSuccess(state, { payload }) {
      state.requests = payload;
      state.loadingStatus = false;
      state.error = null;
    },
    fetchRequestFailed(state, { payload }) {
      state.requests = [];
      state.loadingStatus = false;
      state.error = payload;
    },
  },
});

export const requestActions = requestSlice.actions;

export default requestSlice.reducer;
