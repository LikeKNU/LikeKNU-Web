import PageLayout from "../layouts/PageLayout";
import { BackHeader } from "../components/BackHeader";
import { SETTING_MENU_NAME } from "../constants/pageName";

export default function SettingAboutPage() {
  return (
    <PageLayout>
      <BackHeader Title={SETTING_MENU_NAME.GUIDE} />
    </PageLayout>
  );
}
