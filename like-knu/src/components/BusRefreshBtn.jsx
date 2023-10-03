import styled, { keyframes } from "styled-components"
import {ReactComponent as RefreshIcon} from "assets/icon/refresh_black_24dp.svg"
import colors from "constants/colors"

export default function BusRefreshBtn() {

  const refreshHandler = () => {
    console.log("새로고칠까말까");
  }

  return (
    <Wrapper onClick={refreshHandler}>
      <StyledRefresh />
    </Wrapper>
  )
}
const Wrapper = styled.button`
  position: absolute;
  right: 32px;
  top: 256px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${colors.gray200};
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
const StyledRefresh = styled(RefreshIcon)`
  width: 18px;
  height: 18px;
  fill: ${colors.gray500};
  // // &:active {
  // //   animation: ${rotate} 1s linear forward;
  // //   // animation-iteration-count: 2;
  // // }
  // transition: all ease 1s;
  // &:active {
  //   transform: rotate(90deg);
  // }
`

