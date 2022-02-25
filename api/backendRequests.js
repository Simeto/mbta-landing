import { request, endpoints } from '../api';
import actions from '../src/actions';

export const fetchLines = (dispatch, loading) => {
  request({
    method: 'GET',
    endpoint: endpoints.lines.fetch,
    loading : loading,
    params: {
      'page': {
        'limit': 5
      }
    },
    onSuccess: payload => {
      dispatch(actions.lines.fetchLines(payload))
    }
  })
}

export const fetchRoutes = (dispatch) => {
  request({
    method: 'GET',
    endpoint: endpoints.routes.fetch,
    onSuccess: payload => {
      dispatch(actions.routes.fetchRoutes(payload))
    }
  })
}

export const fetchStops = (dispatch) => {
  request({
    method: 'GET',
    endpoint: endpoints.stops.fetch,
    params: {
      include: ['route']
    },
    onSuccess: payload => {
      dispatch(actions.stops.fetchStops(payload))
    }
  })
}

export const fetchFehicles = (dispatch) => {
  request({
    method: 'GET',
    endpoint: endpoints.stops.fetch,
    params: {
      include: ['route']
    },
    onSuccess: payload => {
      dispatch(actions.stops.fetchStops(payload))
    }
  })
}

export const fetchAlerts = (dispatch) => {
  request({
    method: 'GET',
    endpoint: endpoints.lines.fetch,
    params: {
      'page': {
        'limit': 5
      }
    },
    onSuccess: payload => {
      dispatch(actions.lines.fetchLines(payload))
    }
  })
}

export const fetchFacilities = (dispatch) => {
  request({
    method: 'GET',
    endpoint: endpoints.lines.fetch,
    params: {
      'page': {
        'limit': 5
      }
    },
    onSuccess: payload => {
      dispatch(actions.lines.fetchLines(payload))
    }
  })
}