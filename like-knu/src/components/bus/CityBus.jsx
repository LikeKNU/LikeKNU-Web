import styled from "styled-components";
import { BusDestination } from "./BusDestination";
import { useState } from "react";
import PageContainer from "../../layouts/PageContainer";
import GlobalColor from "../styles/globalColor";
import BusRefreshBtn from "../BusRefreshBtn";
import colors from "../../constants/colors";
import BusList from "./BusList";

const school = ["학교로 출발", "학교로 도착"];

const cityBus = [
  {
    origin: "공주대",
    destination: "터미널",
    departureStop: "공주대공과대학",
    buses: [
      { busNumber: "110", remainingTime: "곧 도착", busColor: "FF0000" },
      { busNumber: "140", remainingTime: "1분 뒤", busColor: "00FF00" },
      { busNumber: "120", remainingTime: "13분 뒤", busColor: "0000FF" },
    ],
  },
  {
    origin: "공주대",
    destination: "터미널",
    departureStop: "공주대공과대학",
    buses: [
      { busNumber: "110", remainingTime: "곧 도착", busColor: "FF0000" },
      { busNumber: "140", remainingTime: "1분 뒤", busColor: "00FF00" },
      { busNumber: "120", remainingTime: "13분 뒤", busColor: "0000FF" },
    ],
  },
];
function CityBus() {
  const [destination, setDestination] = useState(0);
  const today = new Date();
  const formattedDate = `${today.getHours()}:${String(
    today.getMinutes(),
  ).padStart(2, "0")} 기준`;
  return (
    <Wrapper>
      <BusDestinationArea>
        <Row>
          {school.map((text, index) => (
            <BusDestination
              key={index}
              onClick={() => setDestination(index)}
              className={destination === index ? "active" : null}
              $campus={GlobalColor.getColor()}
            >
              {text}
            </BusDestination>
          ))}
        </Row>
        <Row>
          <RefreshTime>{formattedDate}</RefreshTime>
          <BusRefreshBtn />
        </Row>
      </BusDestinationArea>
      {cityBus.map((bus, index) => (
        <BusList key={index} route={bus} />
      ))}
    </Wrapper>
  );
}
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const RefreshTime = styled.div`
  color: ${colors.GRAY350};
  font-size: 1.2rem;
  margin-right: 10px;
`;

const Wrapper = styled(PageContainer)``;
const BusDestinationArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 26px;
`;
export default CityBus;
