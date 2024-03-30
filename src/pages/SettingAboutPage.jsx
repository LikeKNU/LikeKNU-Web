import { BackHeader } from '../components/BackHeader';
import { SETTING_MENU_NAME } from '../constants/pageName';
import PageLayout from '../layouts/PageLayout';

export default function SettingAboutPage() {
  return (
    <PageLayout>
      <BackHeader title={SETTING_MENU_NAME.GUIDE} path={'/'} />
    </PageLayout>
  );
}
