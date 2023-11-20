import styled from "styled-components";
import CardContainer from "components/styles/CardContainer";
import colors from "constants/colors";
import { busMain } from "api/main";
import { useState, useEffect } from "react";
import MainBusItem from "components/main/MainBusItem";
import BusRefreshBtn from "components/BusRefreshBtn";
import { useNavigate } from "react-router-dom";
import { CampusEng } from "../../constants/campus";

export default function MainBus({ selectCampus }) {
  const [buses, setBuses] = useState([]);
  const navigate = useNavigate();
  const getBuses = async () => {
    const res = await busMain(CampusEng[selectCampus]);
    setBuses(res);
  };
  const goBus = () => {
    console.log("버스로 이동!!");
    navigate(`/bus`);
  };

  useEffect(() => {
    getBuses();
  }, [selectCampus]);
  return (
    <BusContainer>
      <Row>
        <Title onClick={goBus}>버스</Title>
        <BusRefreshBtn getBuses={getBuses}></BusRefreshBtn>
      </Row>
      <BusList>
        {buses.map((bus) => (
          <MainBusItem key={bus.routeId} bus={bus} />
        ))}
      </BusList>
    </BusContainer>
  );
}
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const BusContainer = styled(CardContainer)`
  grid-column: 1 / 3;
  min-height: 80px;
`;
const Title = styled.div`
  color: ${colors.BLACK};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  width: 80%;
  padding-top: 16px;
`;
const BusList = styled.div`
  display: grid;
`;
