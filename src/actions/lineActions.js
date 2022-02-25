
import { actionConstants } from '../constants'

export const fetchLines = (payload) => (
  {
    type: actionConstants.lines.LINES_FETCH,
    payload
  }
);

export const setFetchedLines = (payload) => (
  {
    type: actionConstants.lines.LINES_FETCHED_SET,
    payload
  }
);

export const setLineRoutes = (payload) => (
  {
    type: actionConstants.lines.LINES_ROUTES_SET,
    payload
  }
);