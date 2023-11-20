import styled from "styled-components";
import MainBusItem from "../main/MainBusItem";
import { CityBusListItem } from "./CityBusListItem";
import { ReactComponent as ArrowIcon } from "assets/icon/Arrow right alt.svg";
import colors from "../../constants/colors";

const buses = [
  { busNumber: "110", remainingTime: "곧 도착", busColor: "FF0000" },
  { busNumber: "140", remainingTime: "1분 뒤", busColor: "00FF00" },
  { busNumber: "120", remainingTime: "13분 뒤", busColor: "0000FF" },
];
export default function BusList({ route }) {
  return (
    <Wrapper>
      <Title>
        <Text>{route.origin}</Text>
        <StyledArrow />
        <Text>{route.destination}</Text>
      </Title>
      <Content>
        {route.buses.map((bus, index) => (
          <CityBusListItem
            key={index}
            busColor={bus.busColor}
            busNumber={bus.busNumber}
            remainingTime={bus.remainingTime}
          />
        ))}
      </Content>
    </Wrapper>
  );
}
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
`;
const StyledArrow = styled(ArrowIcon)`
  margin: 0 1rem;
`;
const Text = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${colors.BLACK};
  text-align: center;
`;
