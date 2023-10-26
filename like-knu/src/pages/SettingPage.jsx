import PageLayout from "../layouts/PageLayout";
import {PageHeader} from "../components/styles/PageHeader";
import SettingTabList from "./SettingTabList";

export default function SettingPage() {
  return (
    <PageLayout>
        <PageHeader>설정</PageHeader>
        <SettingTabList/>
    </PageLayout>
  )
}
