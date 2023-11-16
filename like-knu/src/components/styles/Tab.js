import styled from "styled-components";
import colors from "../../constants/colors";
export const TabList = styled.div`
  width: 100%;
  height: 34px;

  padding-right: 24px;
  padding-left: 24px;
  border-bottom: 1px solid ${colors.GRAY100};

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  box-sizing: border-box;

  .active {
    border-bottom: 2px solid ${colors.BLACK};
  }
`;
export const TabItem = styled.button`
  color: ${colors.BLACK};
  line-height: 34px;
  text-align: center;
  font-size: 1.6rem;
  padding-right: 8px;
  padding-left: 8px;
`;
