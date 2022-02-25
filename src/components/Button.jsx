import styled from 'styled-components';

const Button = styled.button`
  &.borderless {
    border: none;
  }
  &.primary {
    background: #007BFF;
    &:hover {
      background: #0064cf;
    }
  }
  &.secondary {
    background: #6C757D;
    &:hover {
      background: #5c646b;
    }
  }
  &.success {
    background: #28A745;
    &:hover {
      background: #23913c;
    } 
  }
  &.danger {
    background: #DC3545;
    &:hover {
      background: #c22332;
    }
  }
  &.warning {
    background: #FFC107; 
    &:hover {
      background: #e0a904;
    } 
  }
  &.info {
    background: #17A2B8; 
    &:hover {
      background: #118496;
    } 
  }
  &.light {
    background: #F8F9FA;
    &:hover {
      background: #ededed;
    }
  }
  &.dark {
    background: #343A40;
    &:hover {
      background: #2c3136;
    }
  }
  &:active {
    opacity: 0.8;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  font-weight: 400;
  text-align: center;
  border-radius: 5px;
  width: 80%;
  height: 60px;
  &.image {
    svg {
      height: 40px;
      opacity: 0.7;
    }
    span {
      padding-left: 20px;
      font-size: 20px;
    }
  }
  &:hover {
    cursor: pointer;
    transform: translateY(4px);

  }

  @media screen and (min-width: 480px) {
    width: 100%;
    height: 60px;
    &.image {
      svg {
        height: 40px;
        opacity: 0.7;
      }
      span {
        padding-left: 20px;
        font-size: 20px;
      }
    }
    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (min-width: 720px) {
    flex-direction: column;
    width: 90px;
    height: 110px;
    &.image {
      svg {
        height: 30px;
        opacity: 0.7;
      }
      span {
        padding-top: 20px;
        font-size: 10px;
        padding-left: 0;
      }
    }
    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (min-width: 960px) {
    width: 120px;
    height: 135px;
    &.image {
      svg {
        height: 50px;
        opacity: 0.7;
      }
      span {
        padding-top: 20px;
        padding-left: 0;
      }
    }
    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 175px;
    height: 200px;
    &.image {
      svg {
        height: 100px;
        opacity: 0.7;
      }
      span {
        font-size: 20px;
        padding-top: 20px;
        padding-left: 0;
      }
    }
    &:hover {
      cursor: pointer;
    }
  }

  -webkit-box-shadow: 5px 10px 10px 0px rgba(0,0,0,0.1);
  -moz-box-shadow: 5px 10px 10px 0px rgba(0,0,0,0.1);
  box-shadow: 5px 10px 10px 0px rgba(0,0,0,0.1);
`

const NavButtonGroup = styled.ul`
  display: grid;
  gap: 20px;
` 

export {
  Button,
  NavButtonGroup
}