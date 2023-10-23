import PageLayout from "../layouts/PageLayout";
import {Header, PageHeader} from "../components/styles/PageHeader";
import PageContainer from "../layouts/PageContainer";
import {ListItem} from "../components/notification/NotificationListItem";
import {useEffect, useState} from "react";
import {fetchNotifications} from "../api/notification";
import styled from "styled-components";

export default function NotificationPage() {

  const [notifications, setNotifications] = useState([]);

  const updateNotifications = () => {
    fetchNotifications()
      .then(response => {
        setNotifications(response.body);
      })
      .catch(error => {
        //TODO Error handling
      });
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
      </ShortHeaderPageContainer>
    </PageLayout>
  );
}

const ShortHeaderPageContainer = styled(PageContainer)`
  &&& {
    padding-top: 100px;
  }
`
