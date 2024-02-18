import { ReactComponent as RefreshIcon } from 'assets/icon/refresh_black_24dp.svg';
import colors from 'constants/colors';
import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { isDarkMode } from '../utils/DeviceManageUtil';

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
  border: 1px solid ${!isDarkMode() ? colors.GRAY200 : colors.GRAY500};
  background-color: ${!isDarkMode() ? colors.WHITE : colors.BLACK};
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
  fill: ${!isDarkMode() ? colors.GRAY500 : colors.GRAY100};
  animation: ${(props) => (props.rotate ? css`${spin} 1s linear` : '')};
`;
