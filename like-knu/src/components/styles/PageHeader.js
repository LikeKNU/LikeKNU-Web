import styled from "styled-components";
import colors from "../../constants/colors";
export const PageHeader =  styled.div`
  height: 65px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 16px;
  padding-left: 16px;
  border-bottom: 1px solid ${colors.gray100};
  
  color: ${colors.black};
  font-size: 2.2rem;
  font-weight: 700;
`
export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: ${colors.white};
`
