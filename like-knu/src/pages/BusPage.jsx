import PageLayout from "layouts/PageLayout";
import {PageHeader, Header} from "components/styles/PageHeader";
import PageContainer from "layouts/PageContainer";
import {busTab} from "../constants/tabName";
import {TabList, TabItem} from "../components/styles/Tab";
import {useState} from "react";
export default function BusPage() {
  const [category, setCategory] = useState("city-buses");
  return (
      <PageLayout>
        <Header>
          <PageHeader>버스</PageHeader>
          <TabList>
            <TabItem onClick={() => setCategory("city-buses")}>{busTab[0]}</TabItem>
            <TabItem onClick={() => setCategory("school-buses")}>{busTab[1]}</TabItem>
            <TabItem onClick={() => setCategory("circular-buses")}>{busTab[2]}</TabItem>
          </TabList>
        </Header>
        <PageContainer>
        </PageContainer>
      </PageLayout>
  )
}
