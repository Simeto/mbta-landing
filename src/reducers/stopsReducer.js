import { actionConstants } from '../constants'
import mutations from '../mutations'
import store from '../store/store'

const stopsReducer =  (state = store, action) => {
  const { type } = action
  switch(type) {
  case actionConstants.stops.STOPS_FETCH:
    return mutations.stops.mutateStops(state, action)
  default: 
    return state
  }
}

export default stopsReducer