import styled from 'styled-components';

const Table = styled.table`
background: #fff;
&.hover {
  tr:hover {
    cursor: pointer;
  }
}
&.sm {
  width: 30%;
}
&.md {
  width: 50%;
}
&.lg {
  width: 70%;
}

width: 100%;
th, td {
  padding: 5px 0 5px 5px;
}
thead {
  tr {
    background-color: #fff2d6;
    th {
      padding: 5px 0 5px 5px;
    }
  }
}
tbody {
  tr {
    &:nth-child(even) {
      background-color: #e8eaed;
    }
    &:hover {
      background-color: #adadad;
    }
    td {
      padding: 15px 0 15px 15px;
      border: none;
    }
  }
}
`

export default Table