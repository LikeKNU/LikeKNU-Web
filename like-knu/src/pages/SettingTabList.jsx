import { Link } from "react-router-dom";
import { ReactComponent as RightArrowIcon } from "../assets/icon/right-arrow.svg";
import styled from "styled-components";
import colors from "../constants/colors";
import { SETTING_MENU_NAME } from "../constants/pageName";

export default function SettingTabList() {
  const sendAskMail = () => {
    let mail = "likeknu2023@gmail.com";
    let subject = "[공주대처럼] 문의하기";
    let body = "문의 내용: ";
    document.location.href = `mailto:${mail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const shareContent = async () => {
    const shareData = {
      title: "공주대처럼",
      text: "아이폰은 꼭 '사파리'로 접속해 주세요!",
      url: "https://tosto.re/likeknu",
    };
    await navigator.share(shareData);
  };

  return (
    <SettingContent>
      <Link to={"/setting/notificationTag"}>
        <SettingItem>
          {SETTING_MENU_NAME.NOTICE_NOTIFICATION} <RightArrowIcon />
        </SettingItem>
      </Link>
      <SettingItem onClick={sendAskMail}>
        {SETTING_MENU_NAME.CONTACT} <RightArrowIcon />
      </SettingItem>
      <SettingItem onClick={shareContent}>
        {SETTING_MENU_NAME.SHARE} <RightArrowIcon />
      </SettingItem>
      <Info>
        공주대학교 <br />
        컴퓨터공학부 소프트웨어전공 캡스톤디자인 <br />
        지찬우, 강채련, 안나영
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
  color: ${colors.GRAY400};
  width: 100%;
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
  background-color: ${colors.WHITE};
  font-size: 1.6rem;
`;
