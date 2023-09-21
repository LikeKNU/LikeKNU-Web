import styled from "styled-components";

export default styled.div`
  margin: 0px 20px;
  background-color: skyblue;
  display: grid;
  grid-template-rows: minmax(100px, auto);
  grid-template-columns: 1fr 1fr;

  grid-column-gap: 12px;
  grid-row-gap: 12px;
`