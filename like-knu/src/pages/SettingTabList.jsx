import { Link } from "react-router-dom";
import { ReactComponent as RightArrowIcon } from "../assets/icon/right-arrow.svg";
import styled from "styled-components";
import { SettingNotificationPage } from "./SettingNotificationPage";
import { SettingAboutPage } from "./SettingAboutPage";
import colors from "../constants/colors";

export default function SettingTabList() {
  const sendAskMail = () => {
    document.location.href = "mailto:likeknu2023@gmail.com";
  };

  return (
    <SettingContent>
      <Link to={"/setting/notificationTag"}>
        <SettingItem>
          공지사항 알림 구독 <RightArrowIcon />
        </SettingItem>
      </Link>
      <SettingItem onClick={sendAskMail}>
        문의하기 <RightArrowIcon />
      </SettingItem>
      <Link to={"/setting/about"}>
        <SettingItem>
          공주대처럼 가이드 <RightArrowIcon />
        </SettingItem>
      </Link>
      <Info>
        공주대학교 <br />
        컴퓨터공학부 소프트웨어전공 캡스톤디자인 <br />
        지찬우(jcw001031@gmail.com) <br />
        강채련(chaechae823@naver.com) <br />
        안나영(annay01794@gmail.com) <br />
      </Info>
    </SettingContent>
  );
}
const Info = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.5;
  color: ${colors.GRAY400};
`;
const SettingContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SettingItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px 0 20px;
  height: 48px;
  background-color: #fff;
  font-size: 1.6rem;
`;
