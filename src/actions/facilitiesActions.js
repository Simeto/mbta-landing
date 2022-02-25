
import { actionConstants } from '../constants'

export const fetchFacilities = (payload) => (
  {
    type: actionConstants.facilities.FACILITIES_FETCH,
    payload
  }
);