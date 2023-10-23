import PageLayout from "../layouts/PageLayout";
import {Header, PageHeader} from "../components/styles/PageHeader";
import PageContainer from "../layouts/PageContainer";
import {ListItem} from "../components/notification/NotificationListItem";
import {useEffect, useState} from "react";
import {fetchNotifications} from "../api/notification";
import styled from "styled-components";
import InfiniteScroll from 'react-infinite-scroll-component';

export default function NotificationPage() {

  const [notifications, setNotifications] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const updateNotifications = () => {
    if (totalPages === currentPage) {
      setHasMore(false);
    }

    fetchNotifications(currentPage)
      .then(response => {
        setNotifications(notifications.concat(response.body));
        setTotalPages(response.page.totalPages);
      })
      .catch(error => {
        //TODO Error handling
      });

    setCurrentPage(currentPage + 1);
  }

  useEffect(() => {
    updateNotifications();
  }, []);

  return (
    <PageLayout>
      <Header>
        <PageHeader>알림</PageHeader>
      </Header>
      <ShortHeaderPageContainer>
        {
          notifications.map(notification => (
            <ListItem
              head={notification.notificationTitle}
              subHead={notification.notificationDate}
              body={notification.notificationBody}
              url={notification.notificationUrl}
            ></ListItem>
          ))
        }
        <InfiniteScroll
          dataLength={notifications.length}
          next={updateNotifications}
          hasMore={hasMore}
          loader={
            <div>불러오는 중..</div>
          }
        />
      </ShortHeaderPageContainer>
    </PageLayout>
  );
}

const ShortHeaderPageContainer = styled(PageContainer)`
  &&& {
    padding-top: 100px;
  }
`
