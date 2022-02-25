export const mutateFacilities = (state, action) => {
  const { payload } = action
  return {...state, facilities: payload.data}
}