import { ReactComponent as NotificationIcon } from 'assets/icon/bell-fill.svg';
import { ReactComponent as DownIcon } from 'assets/icon/expand_more_black_24dp.svg';
import { ReactComponent as MapFillIcon } from 'assets/icon/map-fill.svg';
import DropDown from 'components/main/DropDown';
import colors from 'constants/colors';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getCampus, isDarkMode } from 'utils/DeviceManageUtil';
import { mainHeaderMessageAPI } from '../../api/main';
import GlobalColor from '../styles/globalColor';

export default function MainHeader({ setCampus }) {
  const [view, setView] = useState(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  useEffect(() => {
    getMessage();
  }, []);

  const getMessage = async () => {
    const message = await mainHeaderMessageAPI();
    setMessage(message);
  };

  const navigateToNotificationPage = () => {
    navigate(`/notification`);
  };

  const navigateToCampusMapPage = () => {
    navigate(`/campusMap`);
  }

  GlobalColor.setColor();

  return (
    <Wrapper>
      <CampusList
        onClick={() => {
          setView(!view);
        }}
      >
        <Title $campus={GlobalColor.getColor()}>{getCampus()}</Title>
        {view && <DropDown setSelectCampus={setCampus} />}
        <DownIcon fill={!isDarkMode() ? colors.BLACK : colors.DARK_WHITE} />
      </CampusList>
      <Message>{message}</Message>
      <IconList>
        <StyledMapFillIcon onClick={navigateToCampusMapPage} />
        <StyledNotification onClick={navigateToNotificationPage} />
      </IconList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 6.4rem;
  margin-bottom: 16px;
  padding: 0 16px;
  background-color: ${!isDarkMode() ? colors.GRAY50 : colors.DARK};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const CampusList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
  margin-right: 4px;
  color: ${(props) => props.$campus};
`;

const Message = styled.div`
  color: ${!isDarkMode() ? colors.GRAY400 : colors.GRAY100};
  font-size: 1.4rem;
  font-weight: 600;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const IconList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledNotification = styled(NotificationIcon)`
  width: 22px;
  height: 22px;
  color: #ffcb74;
  margin-left: 8px;
`;

const StyledMapFillIcon = styled(MapFillIcon)`
  width: 20px;
  height: 20px;
  color: #43a1ff;
  margin-right: 8px;
`;
