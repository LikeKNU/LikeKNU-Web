import PageLayout from "layouts/PageLayout";
import PageContainer from "layouts/PageContainer";
import {NoticeList} from "components/notice/NoticeList";
import {PageHeader, Header} from "../components/styles/PageHeader";
import Tab from "../components/Tab";
import {noticeTab} from "../constants/tabName";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {notice} from "../api/notice";
import styled from "styled-components";
import colors from "../constants/colors";
import {getCampus} from "../utils/DeviceManageUtil";

export default function NoticePage() {
  const [notices, setNotices] = useState([]);
  let campus = getCampus();
  if (campus === "천안캠") {
    campus = "CHEONAN";
  } else if (campus === "예산캠") {
    campus = "YESAN";
  } else if (campus === "신관캠") {
    campus = "SINGWAN";
  }
  let category = "student-news"
  const getNotices = async (category) => {
    const res = await notice(campus, category);
    setNotices(res);
  }

  useEffect(() => {
    console.log(campus);
    getNotices(category);
  }, []);
  return (
    <PageLayout>
      <Header>
        <PageHeader>공지사항</PageHeader>
        <TabList>
          <TabItem>학생소식</TabItem>
          <TabItem>도서관</TabItem>
          <TabItem>기숙사</TabItem>
          <TabItem>인재개발</TabItem>
        </TabList>
      </Header>
      <PageContainer>
        <NoticeList/>
      </PageContainer>
    </PageLayout>
  )
}
const TabList = styled.div`
  width: 100%;
  height: 34px;
  background-color: skyblue;

  padding-right: 24px;
  padding-left: 24px;
  border-bottom: 1px solid ${colors.gray100};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
`
const TabItem = styled.div`
  color: ${colors.black};
  line-height: 34px;
  text-align: center;
  font-size: 1.6rem;
  background-color: orange;
  padding-right: 8px;
  padding-left: 8px;
`