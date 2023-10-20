import PageLayout from "../layouts/PageLayout";
import {Header, PageHeader} from "../components/styles/PageHeader";
import {Outlet} from "react-router-dom";
import SettingTabList from "./SettingTabList";

export default function SettingPage() {
  return (
    <PageLayout>
      <Header>
        <PageHeader>설정</PageHeader>
        <SettingTabList />
      </Header>
    </PageLayout>
  )
}
