
import { actionConstants } from '../constants'

export const fetchRoutes = (payload) => (
  {
    type: actionConstants.routes.ROUTES_FETCH,
    payload
  }
);

export const setFetchedRoutes = (payload) => (
  {
    type: actionConstants.routes.ROUTES_FETCHED_SET,
    payload
  }
);