import PageLayout from "layouts/PageLayout";
import {PageHeader, Header} from "components/styles/PageHeader";
import PageContainer from "layouts/PageContainer";
import {busTab} from "../constants/tabName";
import Tab from "../components/Tab";

export default function BusPage() {
  return (
      <PageLayout>
        <Header>
          <PageHeader>버스</PageHeader>
            <Tab pageNames={busTab}/>
        </Header>
        <PageContainer>
        </PageContainer>
      </PageLayout>
  )
}
