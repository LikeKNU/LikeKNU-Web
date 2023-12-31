import PageLayout from "layouts/PageLayout";
import { PageHeader, Header } from "components/styles/PageHeader";
import { busTab } from "../constants/tabName";
import { TabList, TabItem } from "../components/styles/Tab";
import { useState } from "react";
import { getCampus } from "../utils/DeviceManageUtil";
import { CampusEng } from "../constants/campus";
import CityBus from "../components/bus/CityBus";
import Shuttle from "../components/bus/Shuttle";
import { PAGE_NAME } from "../constants/pageName";
import { TabHeader } from "../components/globals/TabHeader";
export default function BusPage() {
  const [category, setCategory] = useState(0);

  return (
    <PageLayout>
      <Header>
        <PageHeader>{PAGE_NAME.BUS}</PageHeader>
        <TabHeader
          names={busTab}
          category={category}
          setCategory={setCategory}
        />
      </Header>
      {category === 0 && <CityBus></CityBus>}
      {category === 1 && <Shuttle></Shuttle>}
    </PageLayout>
  );
}
