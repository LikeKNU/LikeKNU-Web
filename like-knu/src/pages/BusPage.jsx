import PageLayout from "layouts/PageLayout";
import { PageHeader, Header } from "components/styles/PageHeader";
import { busTab, apiBusTabList } from "../constants/tabName";
import { TabList, TabItem } from "../components/styles/Tab";
import { useEffect, useState } from "react";
import { getCampus } from "../utils/DeviceManageUtil";
import { Campus } from "../constants/campus";
import CityBus from "../components/bus/CityBus";
import Shuttle from "../components/bus/Shuttle";
export default function BusPage() {
  const [category, setCategory] = useState(0);
  const [routes, setRoutes] = useState([]);

  let campus = getCampus();
  const keys = Object.keys(Campus);
  campus = keys.find((key) => Campus[key] === campus);

  useEffect(() => {
    // getRoutes(apiBusTabList[category]);
    console.log(category);
  }, [category]);
  return (
    <PageLayout>
      <Header>
        <PageHeader>버스</PageHeader>
        <TabList>
          {busTab.map((name, index) => (
            <TabItem
              key={index}
              onClick={() => setCategory(index)}
              className={category === index ? "active" : null}
            >
              {name}
            </TabItem>
          ))}
        </TabList>
      </Header>

      {category === 0 && <CityBus></CityBus>}
      {category === 1 && <Shuttle></Shuttle>}
    </PageLayout>
  );
}
