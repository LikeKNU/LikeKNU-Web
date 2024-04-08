import { Header, PageHeader } from '../components/styles/PageHeader';
import { PAGE_NAME } from '../constants/pageName';
import PageLayout from '../layouts/PageLayout';
import SettingTabList from './SettingTabList';

export default function SettingPage() {
  return (
    <PageLayout>
      <Header>
        <PageHeader>{PAGE_NAME.MORE}</PageHeader>
      </Header>
      <SettingTabList />
    </PageLayout>
  );
}
