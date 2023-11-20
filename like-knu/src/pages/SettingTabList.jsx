import { Link } from "react-router-dom";
import { ReactComponent as RightArrowIcon } from "../assets/icon/right-arrow.svg";
import styled from "styled-components";
import { SettingNotificationPage } from "./SettingNotificationPage";
import { SettingAboutPage } from "./SettingAboutPage";

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
    </SettingContent>
  );
}

const SettingContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top:;
  & a {
    color: #000;
    text-decoration: none;
    outline: none;

    &:active {
      text-decoration: none;
    }
  }
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

  &::before {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #d9d9d9;
    opacity: 0.5;
  }
`;
