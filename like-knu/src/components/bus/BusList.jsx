import styled from "styled-components";
import { CityBusListItem } from "./CityBusListItem";
import { ReactComponent as ArrowIcon } from "assets/icon/Arrow right alt.svg";
import colors from "../../constants/colors";
import { EMPTY_MESSAGE } from "../../constants/message";
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
  color: ${colors.GRAY300};
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
  color: ${colors.GRAY350};
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
  background-color: ${colors.GRAY80};
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${colors.BLACK};
  text-align: center;
`;
const StyledArrow = styled(ArrowIcon)`
  margin: 0 1rem;
`;
