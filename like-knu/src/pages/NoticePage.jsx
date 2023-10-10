import PageLayout from "layouts/PageLayout";
import PageContainer from "layouts/PageContainer";
import {PageHeader, Header} from "../components/styles/PageHeader";
import {noticeTab, noticeParams} from "../constants/tabName";
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
    getNotices(noticeParams[category], currentPage);
  }, [category]);

  useEffect(() => {
    getNotices(noticeParams[category], currentPage);
  }, [currentPage]);
  return (
    <PageLayout>
      <Header>
        <PageHeader>공지사항</PageHeader>
        <TabList>
          <TabItem onClick={() => setCategory(0)} className={category === 0 ? "active" : null}>{noticeTab[0]}</TabItem>
          <TabItem onClick={() => setCategory(1)} className={category === 1 ? "active" : null}>{noticeTab[1]}</TabItem>
          <TabItem onClick={() => setCategory(2)} className={category === 2 ? "active" : null}>{noticeTab[2]}</TabItem>
          <TabItem onClick={() => setCategory(3)} className={category === 3 ? "active" : null}>{noticeTab[3]}</TabItem>
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
const TabList = styled.div`
  width: 100%;
  height: 34px;

  padding-right: 24px;
  padding-left: 24px;
  border-bottom: 1px solid ${colors.gray100};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  box-sizing: border-box;


  .active {
    border-bottom: 2px solid ${colors.black};
  }
  
`
const TabItem = styled.button`
  color: ${colors.black};
  line-height: 34px;
  text-align: center;
  font-size: 1.6rem;
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