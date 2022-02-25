const schedules = {
  stopSchedule: (id) => `/schedules?filter[stop]=${id}`
};
const lines = {
  fetch: 'lines'
};
const facilities = {
  fetch: 'facilities'
};
const alerts = {
  fetch: 'alerts'
};
const routes = {
  fetch: 'routes',
  singleRoute: (id) => `routes/${id}`,
};
const stops = {
  fetch: 'stops'
};
const vehicles = {
  fetch: 'vehicles'
};
const trips = {
  fetch: 'trips',
  singleTrip: (id) => `trips/${id}`
};

const endpoints = {
  schedules,
  lines,
  facilities,
  alerts,
  routes,
  stops,
  vehicles,
  trips
}

export default endpoints