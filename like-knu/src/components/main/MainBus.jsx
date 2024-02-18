import { busMain } from 'api/main';
import BusRefreshBtn from 'components/BusRefreshBtn';
import MainBusItem from 'components/main/MainBusItem';
import CardContainer from 'components/styles/CardContainer';
import colors from 'constants/colors';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CampusEng } from '../../constants/campus';
import { AFTER_TIME } from '../../constants/message';
import { PAGE_NAME } from '../../constants/pageName';
import { isDarkMode } from '../../utils/DeviceManageUtil';

export default function MainBus({ selectCampus }) {
  const [buses, setBuses] = useState([]);
  const navigate = useNavigate();
  const today = new Date();
  const formattedDate = `${today.getHours()}:${String(
    today.getMinutes(),
  ).padStart(2, '0')} ${AFTER_TIME}`;
  const getBuses = async () => {
    const res = await busMain(CampusEng[selectCampus]);
    setBuses(res);
  };
  const goBus = () => {
    navigate(`/bus`);
  };

  useEffect(() => {
    getBuses();
  }, [selectCampus]);
  return (
    <BusContainer>
      <Row>
        <Title onClick={goBus}>{PAGE_NAME.BUS}</Title>
        <RefreshTime>{formattedDate}</RefreshTime>
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
const RefreshTime = styled.div`
  color: ${!isDarkMode() ? colors.GRAY350 : colors.GRAY50};
  font-size: 1.2rem;
  margin-right: 6px;
  width: 20%;
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
  color: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  width: 70%;
  padding-top: 16px;
`;
const BusList = styled.div`
  display: grid;
`;
