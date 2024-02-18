import React from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
import { isDarkMode } from '../../utils/DeviceManageUtil';
import GlobalColor from '../styles/globalColor';

export function BusItem({ times, isRunning }) {
  const routeCount = times.length;
  const calAreaHeight = () => {
    return 12 * routeCount + 18 * (routeCount - 1);
  };
  GlobalColor.setColor();

  let color = '';
  if (isRunning) {
    color = GlobalColor.getColor();
  } else {
    color = !isDarkMode() ? colors.GRAY300 : colors.GRAY400;
  }
  return (
    <Wrapper $height={calAreaHeight() + 'px'}>
      <div className="marker_area">
        {Array(routeCount)
          .fill(0)
          .map((_, index) => (
            <Circle key={index} $campus={color}></Circle>
          ))}
        <Line $campus={color} />
      </div>
      <div className="text_area">
        {times.map((time, index) => (
          <Row key={index}>
            <div style={{ color: !isDarkMode() ? colors.BLACK : colors.WHITE }}>{time.arrivalStop}</div>
            <Time>{time.arrivalTime}</Time>
          </Row>
        ))}
      </div>
    </Wrapper>
  );
}

const Time = styled.div`
  color: ${!isDarkMode() ? colors.BLACK : colors.WHITE};
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.3rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 20px;

  .text_area {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
    font-size: 1.4rem;
    width: 100%;
  }

  .marker_area {
    width: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: ${(props) => props.$height};
  }
`;
const Circle = styled.div`
  border: 3px solid ${(props) => props.$campus};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  box-sizing: border-box;
  background-color: ${!isDarkMode() ? colors.WHITE : colors.BLACK};
  z-index: 1;
`;
const Line = styled.div`
  background-color: ${(props) => props.$campus};
  height: inherit;
  width: 2px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 0;
`;
