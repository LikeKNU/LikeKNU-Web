import PageLayout from "../layouts/PageLayout";
import {PageHeader, Header} from "../components/styles/PageHeader";
import PageContainer from "../layouts/PageContainer";
import Tab from "../components/Tab";
import {cafeteriaTab} from "../constants/tabName";
import {getCampus} from "../utils/DeviceManageUtil";

export default function MenuPage() {
  let tabNames = cafeteriaTab.filter(tabName => tabName.NAMES === getCampus());
  return (
      <PageLayout>
      <Header>
        <PageHeader>식단</PageHeader>
        {/*<Tab pageNames={tabNames} ></Tab>*/}
      </Header>
      <PageContainer>
      </PageContainer>
      </PageLayout>
  )
}
