import { actionConstants } from '../constants'
import mutations from '../mutations'
import store from '../store/store'

const routesReducer =  (state = store, action) => {
  const { type } = action
  switch(type) {
  case actionConstants.routes.ROUTES_FETCH:
    return mutations.routes.mutateRoutes(state, action)
  case actionConstants.routes.ROUTES_FETCHED_SET:
    return mutations.routes.mutateFetchedRoutes(state, action)
  default: 
    return state
  }
}

export default routesReducer