import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { shuttleBuses, shuttleBusesRoutes } from '../../api/bus';
import { CampusEng } from '../../constants/campus';
import colors from '../../constants/colors';
import KakaoAdFit from '../../KakaoAdFit';
import PageContainer from '../../layouts/PageContainer';
import { getCampus, isDarkMode } from '../../utils/DeviceManageUtil';
import BusSelect from '../BusSelect';
import { BusItem } from './BusItem';

const parameter = ['shuttleId', 'shuttleName'];

function Shuttle() {
  const [routes, setRoutes] = useState([]);
  const [shuttle, setShuttle] = useState([]);
  const [message, setMessage] = useState('');
  const [id, setId] = useState('');
  let campus = CampusEng[getCampus()];

  const getRoutes = async () => {
    const res = await shuttleBusesRoutes(campus);
    setRoutes(res);
  };
  const getBuses = async (shuttleId) => {
    const res = await shuttleBuses(shuttleId);
    setShuttle(res);
  };
  useEffect(() => {
    getRoutes();
  }, []);
  useEffect(() => {
    if (id !== '') {
      getBuses(id);
    }
  }, [id]);

  return (<>
      <KakaoAdFit unit={'DAN-qTBYATGoqSTrsMMI'} width={'320'} height={'50'} disabled={false} top={'99px'} />
      <Wrapper>
        <BusSelect
          options={routes}
          value={parameter[0]}
          label={parameter[1]}
          setId={setId}
          setMesseage={setMessage}
        />
        <Message>{message}</Message>
        {shuttle.map((route, index) => (
          <Content key={index}>
            <Title>{route.busName}</Title>
            <BusItem times={route.times} isRunning={route.isRunning} />
          </Content>
        ))}
      </Wrapper>
    </>
  );
}

const Message = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: ${colors.SINGWAN};
  margin-top: 10px;
`;

const Title = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${!isDarkMode() ? colors.DARK_GRAY : colors.DARK_WHITE};
`;

const Content = styled.div`
  padding: 0 40px;
  margin-top: 30px;
`;

const Wrapper = styled(PageContainer)`
  padding-top: 180px;
`;

export default Shuttle;
