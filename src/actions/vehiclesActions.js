
import { actionConstants } from '../constants'

export const fetchVehicles = (payload) => (
  {
    type: actionConstants.vehicles.VEHICLES_FETCH,
    payload
  }
);