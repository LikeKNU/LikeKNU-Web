import { ReactComponent as ArrowIcon } from 'assets/icon/Arrow right alt.svg';
import styled from 'styled-components';
import colors from '../../constants/colors';
import { EMPTY_MESSAGE } from '../../constants/message';
import { isDarkMode } from '../../utils/DeviceManageUtil';
import { CityBusListItem } from './CityBusListItem';

export default function BusList({ route }) {
  return (
    <Wrapper>
      <Title>
        <RouteText>
          {route.origin}
          <StyledArrow />
          {route.destination}
        </RouteText>
        <OriginText>{route.departureStop} 출발</OriginText>
      </Title>
      <Content>
        {route.buses.length !== 0 &&
          route.buses.map((bus, index) => (
            <CityBusListItem
              key={index}
              busColor={bus.busColor}
              busNumber={bus.busNumber}
              remainingTime={bus.remainingTime}
            />
          ))}
        {route.buses.length === 0 && <EmptyText>{EMPTY_MESSAGE}</EmptyText>}
      </Content>
    </Wrapper>
  );
}
const EmptyText = styled.div`
  color: ${!isDarkMode() ? colors.GRAY300 : colors.GRAY400};
  margin-top: 8px;
  font-size: 1.3rem;
  margin-bottom: 8px;
`;
const RouteText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const OriginText = styled.div`
  color: ${!isDarkMode() ? colors.GRAY350 : colors.GRAY400};
  font-size: 1.2rem;
  margin-right: 14px;
`;
const Wrapper = styled.div`
  margin-top: 14px;
`;
const Content = styled.div`
  padding: 0 14px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  padding-left: 14px;
  height: 30px;
  border-radius: 5px;
  background-color: ${!isDarkMode() ? colors.GRAY80 : colors.DARK};
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
  text-align: center;
`;
const StyledArrow = styled(ArrowIcon)`
  margin: 0 1rem;
  fill: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
`;
