import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { fetchNotifications } from '../api/notification';
import { BackHeader } from '../components/BackHeader';
import ListItem from '../components/ListItem';
import { Header } from '../components/styles/PageHeader';
import { PAGE_NAME } from '../constants/pageName';
import PageContainer from '../layouts/PageContainer';
import PageLayout from '../layouts/PageLayout';

export default function NotificationPage() {
  const [notifications, setNotifications] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const location = useLocation();

  const updateNotifications = async () => {
    if (totalPages === currentPage || totalPages < currentPage) {
      setHasMore(false);
    }

    let response = await fetchNotifications(currentPage);
    setNotifications(notifications.concat(response.body));
    setTotalPages(response.page.totalPages);
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    updateNotifications();
  }, []);

  return (
    <PageLayout>
      <Header>
        <BackHeader title={PAGE_NAME.NOTIFICATION} path={'/'} />
      </Header>
      <ShortHeaderPageContainer>
        {notifications.map((notification, index) => (
          <ListItem
            rendererPath={location.pathname}
            key={index}
            head={notification.notificationTitle}
            subHead={notification.notificationDate}
            body={notification.notificationBody}
            url={notification.notificationUrl}
          ></ListItem>
        ))}
        <InfiniteScroll
          dataLength={notifications.length}
          next={updateNotifications}
          hasMore={hasMore}
          loader={<div>불러오는 중..</div>}
        />
      </ShortHeaderPageContainer>
    </PageLayout>
  );
}

const ShortHeaderPageContainer = styled(PageContainer)`
  &&& {
    padding-top: 100px;
  }
`;
