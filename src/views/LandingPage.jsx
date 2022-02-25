import React, { useState, useEffect, useContext, useReducer } from "react";
import { useNavigate  } from "react-router-dom";
import styled from 'styled-components';
import { GlobalContext } from "../context";
import { request, endpoints } from '../../api';
import { Table, Card, CardHeader, CardBody, Button, NavButtonGroup } from '../components';
import { linesReducer, routesReducer } from '../reducers';
import actions from '../actions';

const LandingPage = () => {
  const context = useContext(GlobalContext)
  const navigate = useNavigate();
  const { lines, routes } = context
  const [fetchedLines, dispatchFetchedLines] = useReducer(linesReducer, [])
  const [fetchedRoutes, dispatchFetchedRoutes] = useReducer(routesReducer, [])
  
  const [lineRoutes, setLineRoutes] = useState([])
  const [routePatterns, setRoutePatterns] = useState([])
  const [routePatternTrips, setRoutePatternTrips] = useState([])
  const [tripStops, setTripStops] = useState([])
  const [typeLine, setTypeLine] = useState('All')

  const handleClickLine = (id) =>{
    const routes = fetchedRoutes.fetchedRoutes.filter(route => {
      return route?.relationships?.line?.data?.id === id
    })
    setLineRoutes(routes)
  }

  const handleClickRoute = (id) => {
    request({
      method: 'GET',
      endpoint: endpoints.routes.singleRoute(id),
      params: {
        include: ['route_patterns']
      },
      onSuccess: payload => {
        setRoutePatterns(payload)
      }
    })
  }

  const tripsRoudePattern = (trips) => {
    setRoutePatternTrips(trips)
  }

  const handleClickRoutePattern = (id) => {
    request({
      method: 'GET',
      endpoint: endpoints.trips.fetch,
      params: {
        include: ['stops'],
        route_pattern: id
      },
      onSuccess: payload => {
        tripsRoudePattern(payload)
      }
    })
  }

  const handleClickTrip = (id) => {
    request({
      method: 'GET',
      endpoint: endpoints.trips.singleTrip(id),
      params: {
        include: ['stops']
      },
      onSuccess: payload => {
        setTripStops(payload)
      }
    })
  }

  const handleStopClick = (id) => {
    navigate(`/board/${id}`);
  }

  const linesType = (routeLines) => {
    const linesByType = lines.lines.filter(line => routeLines.includes(line.id))
    dispatchFetchedLines(actions.lines.setFetchedLines(linesByType))
  }

  const filterLines = (type) => {
    if (type.tagName === 'path') {
      type.dataset.type = type.parentElement.dataset.type
    }
    
    const types = {
      0: 'Light Rail',
      1: 'Heavy Rail',
      2: 'Commuter Rail',
      3: 'Bus',
      4: 'Ferry'
    }

    for (const [key, value] of Object.entries(types)) {
      if (key === type.dataset.type) {
        setTypeLine(value)
      }
    }

    const routeLines= routes.routes.filter((route) => {return route.attributes.type === parseInt(type.dataset.type)})
      .map((route) => {return route.relationships.line.data.id})
    linesType(routeLines)
  }

  const filteAllLines = () => {
    dispatchFetchedLines(actions.lines.setFetchedLines(lines))
    setTypeLine('All')
  }

  useEffect(() => {
    {lines.lines && dispatchFetchedLines(actions.lines.setFetchedLines(lines))}
    {routes.routes && dispatchFetchedRoutes(actions.routes.setFetchedRoutes(routes))}
  }, [lines, routes])

  return (
    <LandingPageContainer>
      <HeaderContentContainer>
        <section className="header-title">
          <h1>Choose between line tipes</h1>
        </section>
        <section className="header-nav">
          <nav>
            <NavButtonGroup>
              <li><Button className="borderless success image" data-type="notype" onClick={() => filteAllLines()}><i className="fa-solid fa-globe"/><span>All Line Types</span></Button></li>
              <li><Button className="borderless light image" data-type="0" onClick={(e) => filterLines(e.target)}><i data-type="0" className="fa-solid fa-train-tram"/><span data-type="0">Light Rail Lines</span></Button></li>
              <li><Button className="borderless danger image" data-type="1" onClick={(e) => filterLines(e.target)}><i data-type="1" className="fa-solid fa-train"/><span data-type="1">Heavy Rail LInes</span></Button></li>
              <li><Button className="borderless warning image" data-type="2" onClick={(e) => filterLines(e.target)}><i data-type="2" className="fa-solid fa-train-subway"/><span data-type="2">Commuter Rail Lines</span></Button></li>
              <li><Button className="borderless secondary image" data-type="3" onClick={(e) => filterLines(e.target)}><i data-type="3" className="fa-solid fa-bus"/><span data-type="3">Bus Lines</span></Button></li>
              <li><Button className="borderless info image" data-type="4" onClick={(e) => filterLines(e.target)}><i data-type="4" className="fa-solid fa-ship"/><span data-type="4">Ferry Lines</span></Button></li>
            </NavButtonGroup>
          </nav>
        </section>
      </HeaderContentContainer>
      <ContentContainer>
        <Card>
          <CardHeader>
            <h1>{typeLine} lines</h1>
          </CardHeader>
          <CardBody>
            <Table className="hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {fetchedLines.fetchedLines && fetchedLines.fetchedLines.map((line, idx) => {
                  const { id, attributes } = line
                  const { name } = attributes
                  return (
                    <tr key={idx} onClick={() => handleClickLine(id)}>
                      <td>{id}</td>
                      <td>{name}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </CardBody>
        </Card>

        {lineRoutes.length > 0 && (
          <Card>
            <CardHeader>
              <h1>Routes list</h1>
            </CardHeader>
            <CardBody>
              <Table className="hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>ROUTES</th>
                  </tr>
                </thead>
                <tbody>
                  {lineRoutes && lineRoutes.map((route, idx) => {
                    const { id, attributes } = route;
                    return (
                      <tr key={idx} onClick={() => handleClickRoute(id)}>
                        <td>{id}</td>
                        <td>{attributes.long_name}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        )}

        {routePatterns.included && (
          <Card>
            <CardHeader>
              <h1>Route patterns list</h1>
            </CardHeader>
            <CardBody>
              <Table className="hover">
                <thead>
                  <tr>
                    <th>ROUTE PATTERNS</th>
                  </tr>
                </thead>
                <tbody>
                  {routePatterns.included.map((included, idx) => {
                    const { id, attributes } = included;
                    return (
                      <tr key={idx} onClick={() => handleClickRoutePattern(id)}>
                        <td>{attributes.name}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        )}

        {routePatternTrips.data && (
          <Card>
            <CardHeader>
              <h1>Route trips list</h1>
            </CardHeader>
            <CardBody>
              <Table className="hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Trip Id</th>
                    <th>Headsign</th>
                  </tr>
                </thead>
                <tbody>
                  {routePatternTrips.data && routePatternTrips.data.map((trip, idx) => {
                    const { id, attributes } = trip;
                    return (
                      <tr key={idx} onClick={() => handleClickTrip(id)}>
                        <td>{id}</td>
                        <td>{attributes.block_id}</td>
                        <td>{attributes.headsign}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        )}

        {tripStops.data && (
          <Card>
            <CardHeader>
              <h1>Trip stops list</h1>
            </CardHeader>
            <CardBody>
              <Table className="hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {tripStops.included && routePatternTrips.included.map((stops, idx) => {
                    const { id, attributes } = stops;
                    return (
                      <tr key={idx} onClick={() => handleStopClick(id)}>
                        <td>{id}</td>
                        <td>{attributes.name}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        )}
      </ContentContainer>
    </LandingPageContainer>
  )
}

export default LandingPage;

const LandingPageContainer = styled.div`
-ms-overflow-style: none;  /* IE and Edge */
scrollbar-width: none;  /* Firefox */
&::-webkit-scrollbar {
  display: none;
}
    
width: 55vh;
overflow: auto;
display: grid;
grid-area: content;
align-items: flex-start;
margin-top: 40px;
z-index: 900;

@media screen and (min-width: 480px) {
    width: 35vh;
}

@media screen and (min-width: 720px) {
    width: 55vh;
}

@media screen and (min-width: 960px) {
    width: 70vh;
}

@media screen and (min-width: 1280px) {
    width: 100vh;
}
`

const HeaderContentContainer = styled.header`
li {
  display: flex;
  justify-content: center;
}
@media screen and (min-width: 720px) {
  padding-bottom: 70px;
  .header-title {
    padding: 15px 0 50px 0;
  }
  .header-nav {
    nav {
      display: flex;
      justify-content: center;
      ul {
        list-style: none;
        display: flex;
        justify-content: space-evenly;
      }
    }
  }
}

@media screen and (min-width: 960px) {
  padding-bottom: 70px;
  .header-title {
    padding: 15px 0 50px 0;
  }
  .header-nav {
    nav {
      ul {
        list-style: none;
        display: flex;
        justify-content: space-evenly;
      }
    }
  }
}

@media screen and (min-width: 1280px) {
  padding-bottom: 70px;
  .header-title {
    padding: 15px 0 50px 0;
  }
  .header-nav {
    nav {
      ul {
        list-style: none;
        display: flex;
        justify-content: space-evenly;
      }
    }
  }
}
`

const ContentContainer = styled.section`
display: flex;
flex-direction: column-reverse;
`
