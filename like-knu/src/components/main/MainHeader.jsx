import { ReactComponent as NotificationIcon } from 'assets/icon/bell-fill.svg';
import { ReactComponent as DownIcon } from 'assets/icon/expand_more_black_24dp.svg';
import { ReactComponent as SettingIcon } from 'assets/icon/gear-fill.svg';
import DropDown from 'components/main/DropDown';
import colors from 'constants/colors';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getCampus } from 'utils/DeviceManageUtil';
import { mainHeaderMessage } from '../../api/main';
import GlobalColor from '../styles/globalColor';

export default function MainHeader({ setSelectCampus }) {
  const [view, setView] = useState(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  useEffect(async () => {
    const message = await mainHeaderMessage();
    setMessage(message);
  }, []);

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
        {view && <DropDown setSelectCampus={setSelectCampus} />}
        <DownIcon fill={colors.BLACK} />
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
  border-bottom: 1px solid ${colors.GRAY100};
  background-color: ${colors.WHITE};

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
  color: ${colors.GRAY400};
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
  color: #7f7c7d;
`;
