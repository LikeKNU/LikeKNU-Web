import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as RightArrowIcon } from '../assets/icon/right-arrow.svg';
import { ToggleSwitch } from '../components/setting/ToggleSwitch';
import colors from '../constants/colors';
import { SETTING_MENU_NAME } from '../constants/pageName';
import { changeDarkMode, isDarkMode } from '../utils/DeviceManageUtil';

export default function SettingTabList() {
  const [darkMode, setDarkMode] = useState(isDarkMode());

  const sendAskMail = () => {
    let mail = 'likeknu2023@gmail.com';
    let subject = '[공주대처럼] 문의하기';
    let body = '문의 내용: ';
    document.location.href = `mailto:${mail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const shareContent = async () => {
    const shareData = {
      title: '공주대처럼',
      text: '아이폰은 꼭 \'사파리\'로 접속해 주세요!',
      url: 'https://tosto.re/likeknu',
    };
    await navigator.share(shareData);
  };

  const changeColorMode = async () => {
    await changeDarkMode();
    setDarkMode(isDarkMode());
    window.alert('🔄 앱을 재실행하면 적용됩니다!');
  };

  return (
    <SettingContent>
      <Link to={'/setting/notificationTag'}>
        <SettingItem>
          {SETTING_MENU_NAME.NOTICE_NOTIFICATION} <StyledRightArrowIcon />
        </SettingItem>
      </Link>
      <SettingItem onClick={sendAskMail}>
        {SETTING_MENU_NAME.CONTACT} <StyledRightArrowIcon />
      </SettingItem>
      <SettingItem onClick={shareContent}>
        {SETTING_MENU_NAME.SHARE} <StyledRightArrowIcon />
      </SettingItem>
      <SettingItem>
        다크 모드
        <ToggleSwitch
          width={'54px'}
          height={'28px'}
          area={'22px'}
          isTurnOn={darkMode}
          changeHandler={changeColorMode}
        />
      </SettingItem>
      <Info>
        공주대학교 소프트웨어학과<br />
        지찬우 • 강채련 • 안나영
      </Info>
    </SettingContent>
  );
}
const Info = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 1.1rem;
  text-align: center;
  line-height: 1.5;
  color: ${!isDarkMode() ? colors.GRAY400 : colors.GRAY350};
  width: 100%;
`;
const SettingContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 68px;
`;

const SettingItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px 0 20px;
  height: 48px;
  color: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
  background-color: ${!isDarkMode() ? colors.WHITE : colors.DARK_GRAY};
  font-size: 1.6rem;
`;

const StyledRightArrowIcon = styled(RightArrowIcon)`
  fill: ${!isDarkMode() ? colors.GRAY300 : colors.GRAY400};
`;
