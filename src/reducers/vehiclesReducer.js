import { actionConstants } from '../constants'
import mutations from '../mutations'
import store from '../store/store'

const vehiclesReducer =  (state = store, action) => {
  const { type } = action
  switch(type) {
  case actionConstants.vehicles.VEHICLES_FETCH:
    return mutations.vehicles.mutateVehicles(state, action)
  default: 
    return state
  }
}

export default vehiclesReducer