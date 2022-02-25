
import { actionConstants } from '../constants'

export const fetchStops = (payload) => (
  {
    type: actionConstants.stops.STOPS_FETCH,
    payload
  }
);