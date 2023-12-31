import PageLayout from "layouts/PageLayout";
import PageContainer from "layouts/PageContainer";
import { Header, PageHeader } from "../components/styles/PageHeader";
import { apiNoticeTabList, noticeTab } from "../constants/tabName";
import { useEffect, useState } from "react";
import { notice } from "../api/notice";
import InfiniteScroll from "react-infinite-scroll-component";
import { getCampus } from "../utils/DeviceManageUtil";
import { CampusEng } from "../constants/campus";
import ListItem from "../components/ListItem";
import { PAGE_NAME } from "../constants/pageName";
import { TabHeader } from "../components/globals/TabHeader";

export default function InfiniteScrollNoticePage() {
  const [notices, setNotices] = useState([]);
  const [category, setCategory] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  let campus = CampusEng[getCampus()];

  const getNotices = async (category) => {
    const res = await notice(campus, category);
    setNotices(res.body);
    setTotalPages(res.page.totalPages);
  };

  const fetchData = async () => {
    if (notices.length === 0) {
      const res = await notice(campus, apiNoticeTabList[category], 1);
      setNotices(notices.concat(res.body));
      return;
    }

    if (totalPages === currentPage) {
      setHasMore(false);
    }

    const res = await notice(campus, apiNoticeTabList[category], currentPage);
    setNotices(notices.concat(res.body));
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setNotices([]);
    setCurrentPage(2);
    setHasMore(true);
    getNotices(apiNoticeTabList[category]);
  }, [category]);

  return (
    <PageLayout>
      <Header>
        <PageHeader>{PAGE_NAME.NOTICE}</PageHeader>
        <TabHeader
          names={noticeTab}
          category={category}
          setCategory={setCategory}
        />
      </Header>
      <PageContainer>
        {notices.map((notice, index) => (
          <ListItem
            key={index}
            head={notice.announcementTag}
            subHead={notice.announcementDate}
            body={notice.announcementTitle}
            url={notice.announcementUrl}
          ></ListItem>
        ))}
        <InfiniteScroll
          dataLength={notices.length} // 페이지 당 개수
          next={fetchData} // 스크롤 하단에 도달한 경우 호출할 함수
          hasMore={hasMore} // 추가 데이터 여부
          loader={
            // 로딩 메시지
            <div>불러오는 중..</div>
          }
          scrollThreshold={0.9}
        />
      </PageContainer>
    </PageLayout>
  );
}
