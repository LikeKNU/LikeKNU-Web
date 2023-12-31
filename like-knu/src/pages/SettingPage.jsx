import PageLayout from "../layouts/PageLayout";
import SettingTabList from "./SettingTabList";
import { BackHeader } from "../components/BackHeader";
import { PAGE_NAME } from "../constants/pageName";

export default function SettingPage() {
  return (
    <PageLayout>
      <BackHeader Title={PAGE_NAME.SETTING} />
      <SettingTabList />
    </PageLayout>
  );
}
