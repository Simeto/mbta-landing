import { actionConstants } from '../constants'

export const fetchTrips = (payload) => (
  {
    type: actionConstants.trips.TRIPS_FETCH,
    payload
  }
);