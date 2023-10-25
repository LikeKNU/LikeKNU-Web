import styled from "styled-components";
import colors from "../../constants/colors";
export const TabList = styled.div`
  width: 100%;
  height: 34px;

  padding-right: 24px;
  padding-left: 24px;
  border-bottom: 1px solid ${colors.gray100};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  box-sizing: border-box;


  .active {
    border-bottom: 2px solid ${colors.black};
  }
  
`
export const TabItem = styled.button`
  color: ${colors.black};
  line-height: 34px;
  text-align: center;
  font-size: 1.6rem;
  padding-right: 8px;
  padding-left: 8px;

`