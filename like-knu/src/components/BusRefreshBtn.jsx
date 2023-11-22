import styled, {css, keyframes} from "styled-components";
import { ReactComponent as RefreshIcon } from "assets/icon/refresh_black_24dp.svg";
import colors from "constants/colors";
import {useState} from "react";

export default function BusRefreshBtn({ getBuses }) {
  const [isRotating, setIsRotating] = useState(false);

  const refreshHandler = () => {
    setIsRotating(true);
    getBuses();
  };

  const onAnimationEnd = () => {
    setIsRotating(false);
  };

  return (
    <Wrapper onClick={refreshHandler}>
      <StyledRefresh rotate={isRotating} onAnimationEnd={onAnimationEnd} />
    </Wrapper>
  );
}
const Wrapper = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${colors.GRAY200};
  background-color: ${colors.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(720deg);
  }
`;

const StyledRefresh = styled(RefreshIcon)`
  width: 18px;
  height: 18px;
  fill: ${colors.GRAY500};
  animation: ${(props) => (props.rotate ? css`${spin} 1s linear` : '')};
`;
