import { actionConstants } from '../constants'
import mutations from '../mutations'
import store from '../store/store'

const facilitiesReducer =  (state = store, action) => {
  const { type } = action
  switch(type) {
  case actionConstants.facilities.FACILITIES_FETCH:
    return mutations.facilities.mutateFacilities(state, action)
  default: 
    return state
  }
}

export default facilitiesReducer