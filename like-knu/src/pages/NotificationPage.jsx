import PageLayout from "../layouts/PageLayout";
import {Header, PageHeader} from "../components/styles/PageHeader";
import PageContainer from "../layouts/PageContainer";
import {NotificationListItem} from "../components/notification/NotificationListItem";
import {useEffect, useState} from "react";
import {fetchNotifications} from "../api/notification";

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
      <PageContainer>
        {
          notifications.map(notification => (
            <NotificationListItem
              head={notification.notificationTitle}
              subHead={notification.notificationDate}
              body={notification.notificationBody}
              url={notification.notificationUrl}
            ></NotificationListItem>
          ))
        }
      </PageContainer>
    </PageLayout>
  );
}
