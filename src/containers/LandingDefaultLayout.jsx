import React from "react";

import { LandingPage } from '../views';
import { MainHeader, MainFooter } from '../parts';

const DefaultLayout = () => (
  <div className="container">
    <MainHeader />
    <LandingPage />
    <MainFooter />
  </div>
);

export default DefaultLayout;