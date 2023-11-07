import PageLayout from "layouts/PageLayout";
import PageContainer from "layouts/PageContainer";
import {Header, PageHeader} from "../components/styles/PageHeader";
import {TabItem, TabList} from "../components/styles/Tab";
import {apiNoticeTabList, noticeTab} from "../constants/tabName";
import {useEffect, useState} from "react";
import {notice} from "../api/notice";
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from "styled-components";
import colors from "../constants/colors";
import {getCampus} from "../utils/DeviceManageUtil";
import Campus from "../constants/campus";
import async from "async";

export default function InfiniteScrollNoticePage() {

  const [notices, setNotices] = useState([]);
  const [category, setCategory] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  let campus = getCampus();
  const keys = Object.keys(Campus);
  campus = keys.find((key) => Campus[key] === campus);

  const getNotices = async (category) => {
    const res = await notice(campus, category, currentPage);
    setNotices(res.body);
    setTotalPages(res.page.totalPages);
  }

  const fetchData = async () => {
    if (totalPages === currentPage) {
      setHasMore(false);
    }

    const res = await notice(campus, apiNoticeTabList[category], currentPage);
    setNotices(notices.concat(res.body));
    setCurrentPage(currentPage + 1);
  }

  useEffect(() => {
    setNotices([]);
    setCurrentPage(1);
    setHasMore(true);
    getNotices(apiNoticeTabList[category]);
  }, [category]);

  return (
    <PageLayout>
      <Header>
        <PageHeader>공지사항</PageHeader>
        <TabList>
          {
            noticeTab.map((name, index) => (
              <TabItem key={index} onClick={() => setCategory(index)}
                       className={category === index ? "active" : null}>{name}</TabItem>
            ))
          }
        </TabList>
      </Header>
      <PageContainer>
        {
          notices.map((notice, index) => (
            <ListItem
              head={notice.announcementTag}
              subHead={notice.announcementDate}
              body={notice.announcementTitle}
              url={notice.announcementUrl}
            ></ListItem>
          ))
        }
        <InfiniteScroll
          dataLength={notices.length} // 페이지 당 개수
          next={fetchData} // 스크롤 하단에 도달한 경우 호출할 함수
          hasMore={hasMore} // 추가 데이터 여부
          loader={ // 로딩 메시지
            <div>불러오는 중..</div>
          }
        />
      </PageContainer>
    </PageLayout>
  )
}

const Content = styled.a`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 24px;
`
const Detail = styled.div`
  color: ${colors.gray350};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.1rem;
  margin-bottom: 4px;
`

const Title = styled.span`
  font-size: 1.3rem;
  color: ${colors.black};
`