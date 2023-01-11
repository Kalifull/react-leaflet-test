export const selectRouteLoadingStatus = (state) => state.routerInfo.loadingStatus;

export const routeLoadingError = (state) => state.routerInfo.error;

export const selectRoute = (state) => state.routerInfo.route;
