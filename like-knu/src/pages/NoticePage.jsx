import PageContainer from 'layouts/PageContainer';
import PageLayout from 'layouts/PageLayout';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import { notice } from '../api/notice';
import { TabHeader } from '../components/globals/TabHeader';
import ListItem from '../components/ListItem';
import GlobalColor from '../components/styles/globalColor';
import { Header, PageHeader } from '../components/styles/PageHeader';
import { CampusEng } from '../constants/campus';
import colors from '../constants/colors';
import { PAGE_NAME } from '../constants/pageName';
import { apiNoticeTabList, noticeTab } from '../constants/tabName';
import { getCampus, isDarkMode } from '../utils/DeviceManageUtil';

export default function NoticePage() {
  const [notices, setNotices] = useState([]);
  const [category, setCategory] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [keyword, setKeyword] = useState('');

  let campus = CampusEng[getCampus()];

  const getNotices = async (category) => {
    const res = await notice(campus, category);
    setNotices(res.body);
    setTotalPages(res.page.totalPages);
  };

  const searchNotices = async (category) => {
    const res = await notice(campus, category, 1, keyword);
    setNotices(res.body);
    await setTotalPages(res.page.totalPages);
    if (res.page.totalPages <= 1) {
      setHasMore(false);
    }
  };

  const fetchData = async () => {
    if (notices.length === 0) {
      const res = await notice(campus, apiNoticeTabList[category], 1, keyword);
      setNotices(notices.concat(res.body));
      return;
    }

    if (totalPages === currentPage) {
      setHasMore(false);
    }

    const res = await notice(campus, apiNoticeTabList[category], currentPage, keyword);
    setNotices(notices.concat(res.body));
    setCurrentPage(currentPage + 1);
  };

  const searchByKeyword = () => {
    setNotices([]);
    setCurrentPage(2);
    setHasMore(true);
    searchNotices(apiNoticeTabList[category]);
  }

  useEffect(() => {
    setNotices([]);
    setKeyword('');
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
        <SearchBox>
          <SearchInput value={keyword} onChange={(e) => setKeyword(e.target.value)}
                       placeholder="검색어를 입력하세요"></SearchInput>
          <SearchButton $color={GlobalColor.getColor()} onClick={searchByKeyword}>검색</SearchButton>
        </SearchBox>
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
            <div style={{ color: !isDarkMode() ? colors.BLACK : colors.WHITE }}>불러오는 중..</div>
          }
          scrollThreshold={0.9}
        />
      </PageContainer>
    </PageLayout>
  );
}

const SearchBox = styled.div`
  margin-bottom: 20px;
  margin-top: -10px;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const SearchInput = styled.input`
  border-width: 0 0 1px 0;
  border-bottom-color: ${!isDarkMode() ? colors.GRAY200 : colors.GRAY600};
  border-radius: 0;
  font-size: 1.4rem;
  flex: 6;
  background-color: ${!isDarkMode() ? colors.WHITE : colors.BLACK};
  color: ${!isDarkMode() ? colors.BLACK : colors.WHITE};

  &:focus {
    outline: none;
    border-bottom: 1.2px solid ${!isDarkMode() ? colors.GRAY500 : colors.GRAY200};
  }
`;

const SearchButton = styled.button`
  margin-left: 10px;
  padding: 4px;
  font-size: 1.4rem;
  background-color: ${(props) => props.$color};
  color: white;
  font-weight: 600;
  border-radius: 4px;
  flex: 1;
`;
