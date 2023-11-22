import PageLayout from "../layouts/PageLayout";
import { Header } from "../components/styles/PageHeader";
import PageContainer from "../layouts/PageContainer";
import ListItem from "../components/ListItem";
import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notification";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { BackHeader } from "../components/BackHeader";
import { PAGE_NAME } from "../constants/pageName";

export default function NotificationPage() {
  const [notifications, setNotifications] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

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
        <BackHeader Title={PAGE_NAME.NOTIFICATION} />
      </Header>
      <ShortHeaderPageContainer>
        {notifications.map((notification, index) => (
          <ListItem
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
