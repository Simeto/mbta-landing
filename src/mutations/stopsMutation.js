export const mutateStops = (state, action) => {
  const { payload } = action
  return {...state, stops: payload.data}
}