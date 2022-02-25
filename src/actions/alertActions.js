
import { actionConstants } from '../constants'

export const fetchAlerts = (payload) => (
  {
    type: actionConstants.alerts.ALERTS_FETCH,
    payload
  }
);