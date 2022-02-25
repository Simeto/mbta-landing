export const mutateTrips = (state, action) => {
  const { payload } = action
  return {...state, trips: payload.data}
}