export const mutateVehicles = (state, action) => {
  const { payload } = action
  return {...state, vehicles: payload.data}
}