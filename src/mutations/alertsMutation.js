export const mutateAlerts = (state, action) => {
  const { payload } = action
  return {...state, alerts: payload.data}
}