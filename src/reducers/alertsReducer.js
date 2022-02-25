import { actionConstants } from '../constants'
import mutations from '../mutations'
import store from '../store/store'

const alertsReducer =  (state = store, action) => {
  const { type } = action
  switch(type) {
  case actionConstants.alerts.ALERTS_FETCH:
    return mutations.alerts.mutateAlerts(state, action)
  default: 
    return state
  }
}

export default alertsReducer