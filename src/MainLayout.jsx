
import '@fortawesome/fontawesome-free/js/all.js';
import "./scss/_styles.scss";
import React, { useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { GlobalContextProvider } from './context'

import LandingDefaultLayout from './containers/LandingDefaultLayout';
import { BoardDefaultLayout } from 'rail_board/containers';

import { backendRequest } from '../api';

import { linesReducer, routesReducer } from './reducers';

const App = () => {
  const [lines, dispatchLines] = useReducer(linesReducer, [])
  const [routes, dispatchRoutes] = useReducer(routesReducer, [])


  useEffect(() => {
    backendRequest.fetchLines(dispatchLines)
    backendRequest.fetchRoutes(dispatchRoutes)
  }, [])

  const glogalShares = {
    lines,
    routes,
  }

  return (
    <Router>
      <GlobalContextProvider context={glogalShares}>
        <Routes>
          <Route exact path="/" element={<LandingDefaultLayout lines={lines}/>} />
          <Route path="/board/:id" element={<BoardDefaultLayout />} />
          <Route path="*" element={<Navigate to='/' replace />} />
        </Routes>
      </GlobalContextProvider>
    </Router>
  )
};

export default App
