export const mutateRoutes = (state, action) => {
  const { payload } = action
  return {...state, routes: payload.data}
}

export const mutateFetchedRoutes = (state, action) => {
  const { payload } = action
  return {...state, fetchedRoutes: payload.routes}
}