import styled from "styled-components";
import CardContainer from "components/styles/CardContainer";
import colors from "constants/colors";
import { busMain } from "api/main";
import { useState, useEffect } from "react";
import MainBusItem from "components/main/MainBusItem";
import BusRefreshBtn from "components/BusRefreshBtn";
import { useNavigate, useParams } from "react-router-dom";

export default function MainBus() {
  const [buses, setBuses] = useState([]);
  const campus = useParams();
  const navigate = useNavigate();
  const getBuses = async () => {
    setBuses([]);
    const res = await busMain(campus.campus);
    setBuses(res);
  };
  const goBus = () => {
    console.log("버스로 이동!!");
    navigate(`/bus`);
  };

  useEffect(() => {
    getBuses();
  }, [campus]);
  return (
    <BusContainer>
      <Row>
        <Title onClick={goBus}>버스</Title>
        <BusRefreshBtn></BusRefreshBtn>
      </Row>

      <BusList>
        {buses.map((bus) => (
          <MainBusItem key={bus.routeId} bus={bus} />
        ))}
      </BusList>
    </BusContainer>
  );
}
const StyledBusRefreshBtn = styled(BusRefreshBtn)`
  position: absolute;
  right: 32px;
  top: 256px;
`;
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
  //grid-row-gap: 1.2rem;
`;
