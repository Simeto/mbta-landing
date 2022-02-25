import React from "react";
import styled from 'styled-components';

const MainFooter = () => {
  return (
    <FooterContainer />
  )
}

export default MainFooter;

const FooterContainer = styled.footer`
  display: grid;
  grid-area: footer;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 40px;
  z-index: 1000;
  background-color: #fff;
  opacity: 0.5;
  color: #000;

  -webkit-box-shadow: 0px -10px 10px 0px rgba(0,0,0,0.06);
  -moz-box-shadow: 0px -10px 10px 0px rgba(0,0,0,0.06);
  box-shadow: 0px -10px 10px 0px rgba(0,0,0,0.06);
  `
