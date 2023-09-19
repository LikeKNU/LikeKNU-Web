import styled from "styled-components";

export default styled.div`
  margin: 0px 20px;
  background-color: skyblue;
  display: grid;
  grid-template-rows: minmax(100px, auto);
  grid-template-columns: repeat(2, minmax(100px, auto));

  grid-column-gap: 25px;
  grid-row-gap: 20px;
`