import { actionConstants } from '../constants'
import mutations from '../mutations'
import store from '../store/store'

const tripsReducer =  (state = store, action) => {
  const { type } = action
  switch(type) {
  case actionConstants.trips.TRIPS_FETCH:
    return mutations.trips.mutateTrips(state, action)
  default: 
    return state
  }
}

export default tripsReducer