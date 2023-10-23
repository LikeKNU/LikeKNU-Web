import PageLayout from "../layouts/PageLayout";
import {Header, PageHeader} from "../components/styles/PageHeader";
import PageContainer from "../layouts/PageContainer";
import {NotificationListItem} from "../components/notification/NotificationListItem";

export default function NotificationPage() {
  return (
    <PageLayout>
      <Header>
        <PageHeader>알림</PageHeader>
      </Header>
      <PageContainer>
        <NotificationListItem></NotificationListItem>
      </PageContainer>
    </PageLayout>
  )
}
