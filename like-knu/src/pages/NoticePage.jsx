import PageLayout from "layouts/PageLayout";
import PageContainer from "layouts/PageContainer";
import {PageHeader, Header} from "../components/styles/PageHeader";
import {TabList, TabItem} from "../components/styles/Tab";
import {noticeTab, apiNoticeTabList} from "../constants/tabName";
import {useEffect, useState} from "react";
import {notice} from "../api/notice";
import styled from "styled-components";
import colors from "../constants/colors";
import {getCampus} from "../utils/DeviceManageUtil";
import NoticePagination from "../components/notice/NoticePagination";
import Campus from "../constants/Campus";

export default function NoticePage() {
  const [notices, setNotices] = useState([]);
  const [category, setCategory] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  let campus = getCampus();
  const keys = Object.keys(Campus);
  campus = keys.find((key) => Campus[key] === campus);

  const getNotices = async (category, page) => {
    const res = await notice(campus, category, page);
    setNotices(res.body);
    setTotalElements(res.page.totalElements);
  }

  useEffect(() => {
    console.log(currentPage);
    setCurrentPage(1);
    getNotices(apiNoticeTabList[category], currentPage);
  }, [category]);

  useEffect(() => {
    getNotices(apiNoticeTabList[category], currentPage);
  }, [currentPage]);
  return (
    <PageLayout>
      <Header>
        <PageHeader>공지사항</PageHeader>
        <TabList>
          {
            noticeTab.map((name, index) => (
              <TabItem onClick={() => setCategory(index)} className={category === index ? "active" : null}>{name}</TabItem>
            ))
          }
        </TabList>
      </Header>
      <PageContainer>
        {
          notices.map((notice) => (
            <Content key={notice.announcementId} onClick={() => window.open(notice.announcementUrl, "_blank")}>
              <Title>{notice.announcementTitle}</Title>
              <Date>{notice.announcementDate}</Date>
            </Content>
          ))
        }
        <NoticePagination totalElements={totalElements} currentPage={currentPage} setPage={setCurrentPage}/>
      </PageContainer>
    </PageLayout>
  )
}

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