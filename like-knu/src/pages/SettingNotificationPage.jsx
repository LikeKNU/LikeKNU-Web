import PageLayout from "../layouts/PageLayout";
import {BackHeader} from "../components/BackHeader";
import styled from "styled-components";
import PageContainer from "../layouts/PageContainer";
import TagList from "../components/setting/TagList";
import colors from "../constants/colors";
import {ToggleSwitch} from "../components/setting/ToggleSwitch";
import {useEffect, useState} from "react";
import {
  changeTurnOnNotification,
  isTurnOnNotification,
  updateNotificationToken,
} from "../api/device";
import {requestNotificationPermission} from "../firebaseCloudMessaging";
import {SETTING_MENU_NAME} from "../constants/pageName";

export default function SettingNotificationPage() {
  const [isTurnOn, setIsTurnOn] = useState(false);

  const getDeviceTurnOnNotification = async () => {
    let turnOn = await isTurnOnNotification();
    setIsTurnOn(turnOn);
  };

  const changeDeviceNotification = async () => {
    setIsTurnOn(!isTurnOn);
    changeTurnOnNotification(!isTurnOn);
    if (!isTurnOn) {
      let token = await requestNotificationPermission();
      if (!token) {
        setIsTurnOn(isTurnOn);
      }
      updateNotificationToken(token);
    }
  };

  useEffect(() => {
    getDeviceTurnOnNotification();
  }, []);

  return (
    <PageLayout>
      <BackHeader Title={SETTING_MENU_NAME.NOTICE_NOTIFICATION}/>
      <StyledPageContainer>
        <Content>
          <Notification>
            <Title>공지사항 알림</Title>
            <ToggleSwitch
              width={"54px"}
              height={"28px"}
              area={"22px"}
              isTurnOn={isTurnOn}
              changeHandler={changeDeviceNotification}
            />
          </Notification>
          <Tag>
            <Title>공지사항 태그</Title>
            <Detail>알림을 받고 싶은 태그를 선택해주세요!</Detail>
            <TagList/>
          </Tag>
        </Content>
      </StyledPageContainer>
    </PageLayout>
  );
}

const StyledPageContainer = styled(PageContainer)`
  padding-top: 20px;
`;
const Content = styled.div``;
const Tag = styled.div``;
const Notification = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 34px;
`;
const Title = styled.div`
  font-size: 1.8rem;
  color: ${colors.BLACK};
  font-weight: 600;
`;
const Detail = styled.div`
  font-size: 1.4rem;
  color: ${colors.GRAY400};
  margin-top: 4px;
  margin-bottom: 20px;
`;
