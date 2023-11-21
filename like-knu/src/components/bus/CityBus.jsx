import styled from "styled-components";
import { BusDestination } from "./BusDestination";
import { useEffect, useState } from "react";
import PageContainer from "../../layouts/PageContainer";
import GlobalColor from "../styles/globalColor";
import BusRefreshBtn from "../BusRefreshBtn";
import colors from "../../constants/colors";
import BusList from "./BusList";
import { CampusEng } from "../../constants/campus";
import { getCampus } from "../../utils/DeviceManageUtil";
import { cityBuses } from "../../api/bus";

const school = ["학교에서 출발", "학교로 도착"];

function CityBus() {
  const [destination, setDestination] = useState(0);
  const [buses, setBuses] = useState([]);
  const today = new Date();
  const formattedDate = `${today.getHours()}:${String(
    today.getMinutes(),
  ).padStart(2, "0")} 기준`;

  const getBuses = async () => {
    let type = "";
    if (destination === 0) {
      type = "outgoing";
    }
    if (destination === 1) {
      type = "incoming";
    }
    const res = await cityBuses(CampusEng[getCampus()], type);
    setBuses(res);
  };
  useEffect(() => {
    getBuses();
  }, [destination]);
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
          <BusRefreshBtn getBuses={getBuses} />
        </Row>
      </BusDestinationArea>
      {buses.map((bus, index) => (
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
