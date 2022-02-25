import styled from 'styled-components';

const Card = styled.section`
  &.sm {
    width: 30%;
  }
  &.md {
    width: 50%;
  }
  &.lg {
    width: 70%;
  }

  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  border-radius: 5px;
  max-height: 500px;
  overflow: auto;
  margin-top: 50px;
  &:last-of-type {
    margin-top: 0;
  }

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }

  -webkit-box-shadow: 5px 10px 10px 0px rgba(0,0,0,0.1);
  -moz-box-shadow: 5px 10px 10px 0px rgba(0,0,0,0.1);
  box-shadow: 5px 10px 10px 0px rgba(0,0,0,0.1);
`

const CardHeader = styled.header`
  display: flex;
  padding: 15px 0 15px 15px;
  background: #dbdbdb;
  position: sticky;
  top: 0;
  @media screen and (min-width: 720px) {
    padding: 30px 0 30px 15px;
  }
`

const CardBody = styled.section`
  display: flex;
`

export {
  Card,
  CardHeader,
  CardBody
}