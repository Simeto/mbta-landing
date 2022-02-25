import React from "react";
import styled from 'styled-components';
import { NavLink  } from "react-router-dom";

const MainHeader = () => {
  return (
    <HeaderContainer>
      <header>
        <ContentHeader>
          <section className="header-logo">
            <article>
              <section>Logo</section>
            </article>
          </section>
          <HeaderMain>
            <section className="header-text">
              <h4>Massachusetts BayTransportation Authority - stop schedules</h4>
            </section>
            <section className="header-nav">
              <nav>
                <ul>
                  <li><NavLink  to="/">Landing</NavLink></li>
                </ul>
              </nav>
            </section>
          </HeaderMain>
        </ContentHeader>
      </header>
    </HeaderContainer>
  )
}

export default MainHeader;

const HeaderContainer = styled.section`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 40px;
  color: #000;
  display: grid;
  grid-area: header;
  align-items: center;
  background-color: #fff;
  opacity: 0.5;
  gap: 20px;
  header {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: 
      ". content .";
  }

  -webkit-box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.06);
  -moz-box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.06);
  box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.06);
`

const ContentHeader = styled.div`
  display: grid;
  grid-area: content;
  grid-template-columns: 1fr 6fr;
  .header-logo {
    img {
      content: "";
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 0.9;
      wigth: 100%;
      height: 100%;
    }
  }
`

const HeaderMain = styled.section`
display: grid;
grid-template-columns: 2fr 1fr;
.header-text {
  text-transform: uppercase;
}
.header-nav {
  display: flex;
  justify-content: end;
  nav {
    padding: 0 10px;
    ul {
      list-style: none;
      display: flex;
      li {
        padding-right: 15px;
        &:last-of-type {
          padding-right: 0;
        }
        a {
          color: #fff;
          text-transform: uppercase;
          font-weight: 500;
          font-size: 12px;
          text-decoration: none;
          color: #000;
        }
      }
    }
  }
}


@media screen and (min-width: 1280px) {
  display: grid;
  grid-template-columns: 2fr 1fr;
  .header-text {
    text-transform: uppercase;
  }
  .header-nav {
    display: flex;
    justify-content: end;
    nav {
      padding: 0 10px;
      ul {
        list-style: none;
        display: flex;
        li {
          padding-right: 15px;
          &:last-of-type {
            padding-right: 0;
          }
          a {
            color: #fff;
            text-transform: uppercase;
            font-weight: 500;
            font-size: 12px;
            text-decoration: none;
            color: #000;
          }
        }
      }
    }
  }
}
`