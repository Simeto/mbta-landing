import * as facilities from './facilitiesMutation';
import * as lines from './linesMutation';
import * as alerts from './alertsMutation';
import * as routes from './routesMutation';
import * as stops from './stopsMutation';
import * as vehicles from './vehiclesMutation';
import * as trips from './tripsMutation';

const mutations = {
  facilities,
  lines,
  alerts,
  routes,
  stops,
  vehicles,
  trips
}

export default mutations