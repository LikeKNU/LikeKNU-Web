import PageLayout from "layouts/PageLayout";
import PageContainer from "layouts/PageContainer";
import {PageHeader, Header} from "../components/styles/PageHeader";
import {noticeTab} from "../constants/tabName";
import {useEffect, useState} from "react";
import {notice} from "../api/notice";
import styled from "styled-components";
import colors from "../constants/colors";
import {getCampus} from "../utils/DeviceManageUtil";
import {NoticeItem} from "../components/notice/NoticeItem";
import NoticePagination from "../components/notice/NoticePagination";
export default function NoticePage() {
  const [notices, setNotices] = useState([]);
  const [category, setCategory] = useState("student-news");
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  let campus = getCampus();
  if (campus === "천안캠") {
    campus = "CHEONAN";
  } else if (campus === "예산캠") {
    campus = "YESAN";
  } else if (campus === "신관캠") {
    campus = "SINGWAN";
  }

  const getNotices = async (category) => {
    const res = await notice(campus, category);
    console.log(res.body);
    setNotices(res.body);
    setCurrentPage(res.page.currentPage);
    setTotalPages(res.page.totalPages);
    console.log(totalPages);
  }

  const goDetailPage = (url) => {

  }

  useEffect(() => {
    console.log(campus);
    getNotices(category);
  }, [category]);
  return (
    <PageLayout>
      <Header>
        <PageHeader>공지사항</PageHeader>
        <TabList>
          <TabItem onClick={() => setCategory("student-news")}>{noticeTab[0]}</TabItem>
          <TabItem onClick={() => setCategory("library")}>{noticeTab[1]}</TabItem>
          <TabItem onClick={() => setCategory("dormitory")}>{noticeTab[2]}</TabItem>
          <TabItem onClick={() => setCategory("internship")}>{noticeTab[3]}</TabItem>
        </TabList>
      </Header>
      <PageContainer>
        {
          notices.map((notice) => (
            <Content key={notice.announcementId} href={notice.announcementUrl}>
              <Title>{notice.announcementTitle}</Title>
              <Date>{notice.announcementDate}</Date>
            </Content>
          ))
        }
        <NoticePagination totalPage={totalPages} currentPage={currentPage} setPage={setCurrentPage}/>
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
const TabItem = styled.button`
  color: ${colors.black};
  line-height: 34px;
  text-align: center;
  font-size: 1.6rem;
  background-color: orange;
  padding-right: 8px;
  padding-left: 8px;
`
const Content = styled.a`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid ${colors.gray200}; 
  margin-bottom: 14px;
`
const Title = styled.span`
  font-size: 1.3rem;
`
const Date = styled.div`
  color: ${colors.gray350};
  margin-top: 2px;
  margin-bottom: 2px;
  font-size: 1.1rem;
`