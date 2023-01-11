import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  route: null,
  loadingStatus: false,
  error: null,
};

const routerSlice = createSlice({
  name: 'routerState',
  initialState,
  reducers: {
    fetchRoute(state) {
      state.loadingStatus = true;
      state.error = null;
    },
    fetchRouteSuccess(state, { payload }) {
      state.route = payload;
      state.loadingStatus = false;
      state.error = null;
    },
    fetchRouteFailed(state, { payload }) {
      state.loadingStatus = false;
      state.error = payload;
    },
  },
});

export const routerActions = routerSlice.actions;

export default routerSlice.reducer;
