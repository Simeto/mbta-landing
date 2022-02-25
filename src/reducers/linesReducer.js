import { actionConstants } from '../constants'
import mutations from '../mutations'
import store from '../store/store'

const linesReducer =  (state = store, action) => {
  const { type } = action
  switch(type) {
  case actionConstants.lines.LINES_FETCH:
    return mutations.lines.mutateLines(state, action)
  case actionConstants.lines.LINES_FETCHED_SET:
    return mutations.lines.mutateFetchedLines(state, action)
  case actionConstants.lines.LINES_ROUTES_SET:
    return mutations.lines.mutateLineRoutes(state, action)
  default: 
    return state
  }
}

export default linesReducer