import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { cityBuses } from '../../api/bus';
import { CampusEng } from '../../constants/campus';
import colors from '../../constants/colors';
import PageContainer from '../../layouts/PageContainer';
import { getCampus, isDarkMode } from '../../utils/DeviceManageUtil';
import BusRefreshBtn from '../BusRefreshBtn';
import GlobalColor from '../styles/globalColor';
import { BusDestination } from './BusDestination';
import BusList from './BusList';

const school = ['학교에서 출발', '학교로 도착'];

function CityBus() {
  const [destination, setDestination] = useState(0);
  const [buses, setBuses] = useState([]);
  const today = new Date();
  const formattedDate = `${today.getHours()}:${String(
    today.getMinutes(),
  ).padStart(2, '0')} 기준`;

  const getBuses = async (refresh) => {
    let type = '';
    if (destination === 0) {
      type = 'outgoing';
    }
    if (destination === 1) {
      type = 'incoming';
    }
    const res = await cityBuses(CampusEng[getCampus()], type, refresh);
    setBuses(res);
  };

  GlobalColor.setColor();
  useEffect(() => {
    getBuses(false);
  }, [destination]);

  return (
    <>
      <FixContainer>
        <BusDestinationArea>
          <Row>
            {school.map((text, index) => (
              <BusDestination
                key={index}
                onClick={() => setDestination(index)}
                className={destination === index ? 'active' : null}
                $campus={GlobalColor.getColor()}
              >
                {text}
              </BusDestination>
            ))}
          </Row>
          <Row>
            <RefreshTime>{formattedDate}</RefreshTime>
            <BusRefreshBtn getBuses={() => getBuses(true)} />
          </Row>
        </BusDestinationArea>
      </FixContainer>
      <StyledPageContainer>
        {buses.map((bus, index) => (
          <BusList key={index} route={bus} />
        ))}
      </StyledPageContainer>
    </>
  );
}

const StyledPageContainer = styled(PageContainer)`
  padding-top: 160px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const RefreshTime = styled.div`
  color: ${!isDarkMode() ? colors.GRAY350 : colors.GRAY400};
  font-size: 1.2rem;
  margin-right: 10px;
`;
const FixContainer = styled.div`
  top: 99px;
  position: fixed;
  background-color: ${!isDarkMode() ? colors.WHITE : colors.DARK_GRAY};
  width: 100%;
  padding: 12px 0;
  box-shadow: ${!isDarkMode() ? '0 2px 0 0 rgba(175, 175, 175, 0.1)' : '0 2px 0 0 rgba(80, 80, 80, 0.1)'};
`;
const BusDestinationArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
`;
export default CityBus;
