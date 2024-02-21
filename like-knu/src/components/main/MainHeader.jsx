import { ReactComponent as NotificationIcon } from 'assets/icon/bell-fill.svg';
import { ReactComponent as DownIcon } from 'assets/icon/expand_more_black_24dp.svg';
import { ReactComponent as SettingIcon } from 'assets/icon/gear-fill.svg';
import DropDown from 'components/main/DropDown';
import colors from 'constants/colors';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getCampus, isDarkMode } from 'utils/DeviceManageUtil';
import { mainHeaderMessage } from '../../api/main';
import GlobalColor from '../styles/globalColor';

export default function MainHeader({ setCampus }) {
  const [view, setView] = useState(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  useEffect(() => {
    getMessage();
  }, []);

  const getMessage = async () => {
    const message = await mainHeaderMessage();
    setMessage(message);
  };

  const goNotification = () => {
    navigate(`/notification`);
  };

  const goSetting = () => {
    navigate(`/setting`);
  };
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
        <StyledNotification onClick={goNotification} />
        <StyledSetting onClick={goSetting} />
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
    //border-bottom: 1px solid ${!isDarkMode() ? colors.GRAY100 : colors.GRAY650};
  background-color: ${!isDarkMode() ? colors.GRAY50 : colors.DARK};
    // background-color: ${!isDarkMode() ? 'rgba( 243, 244, 246, 0.6 )' : 'rgba( 16, 16, 18, 0.6 )'};
  //backdrop-filter: blur(8px);
  //-webkit-backdrop-filter: blur(8px);

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
const IconList = styled.div``;
const StyledNotification = styled(NotificationIcon)`
  width: 22px;
  height: 22px;
  color: #ffcb74;
  margin-right: 14px;
`;
const StyledSetting = styled(SettingIcon)`
  width: 22px;
  height: 22px;
  color: ${!isDarkMode() ? '#7f7c7d' : '#b7b7b7'};
`;
