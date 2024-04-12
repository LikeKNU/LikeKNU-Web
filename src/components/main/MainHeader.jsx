import bellEmoji from 'assets/icon/bell_emoji.png'
import { ReactComponent as DownIcon } from 'assets/icon/expand_more_black_24dp.svg';
import mapEmoji from 'assets/icon/map_emoji.png'
import taxiFrontEmoji from 'assets/icon/taxi_front_emoji.png'
import DropDown from 'components/main/DropDown';
import colors from 'constants/colors';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getCampus, isDarkMode } from 'utils/DeviceManageUtil';
import { mainHeaderMessageAPI } from '../../api/main';
import ImageIcon from '../common/ImageIcon';
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
        <StyledImageIcon src={taxiFrontEmoji} />
        <StyledImageIcon src={mapEmoji} onClick={navigateToCampusMapPage} />
        <StyledImageIcon src={bellEmoji} onClick={navigateToNotificationPage} />
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

const StyledImageIcon = styled(ImageIcon)`
  width: 26px;
  height: 26px;
  padding-left: 10px;
`;
