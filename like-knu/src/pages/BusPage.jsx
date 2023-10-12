import PageLayout from "layouts/PageLayout";
import {PageHeader, Header} from "components/styles/PageHeader";
import PageContainer from "layouts/PageContainer";
import {busTab, apiBusTabList} from "../constants/tabName";
import {TabList, TabItem} from "../components/styles/Tab";
import {useEffect, useState} from "react";
import {cityBusesRoutes} from "../api/bus";
import {getCampus} from "../utils/DeviceManageUtil";
import Campus from "../constants/Campus";
import styled from "styled-components";
export default function BusPage() {
  const [category, setCategory] = useState(0);
  const [routes, setRoutes] = useState([]);

  let campus = getCampus();
  const keys = Object.keys(Campus);
  campus = keys.find((key) => Campus[key] === campus);

  const getRoutes = async (category) => {
    const res = await cityBusesRoutes(campus, category);
    setRoutes(res);
  }

  useEffect(() => {
    getRoutes(apiBusTabList[category]);
  }, [category]);
  return (
      <PageLayout>
        <Header>
          <PageHeader>버스</PageHeader>
          <TabList>
            <TabItem onClick={() => setCategory(0)} className={category === 0 ? "active" : null}>{busTab[0]}</TabItem>
            <TabItem onClick={() => setCategory(1)} className={category === 1 ? "active" : null}>{busTab[1]}</TabItem>
            <TabItem onClick={() => setCategory(2)} className={category === 2 ? "active" : null}>{busTab[2]}</TabItem>
          </TabList>
        </Header>
        {
          (category === 0) &&
          <StyledCityBusPageContainer>
          </StyledCityBusPageContainer>
        }
        {
          (category === 1 || category === 2) &&
          <StyledSchoolBusPageContainer>
          </StyledSchoolBusPageContainer>
        }

      </PageLayout>
  )
}

const StyledCityBusPageContainer = styled(PageContainer)`
  background-color: red;
`
const StyledSchoolBusPageContainer = styled(PageContainer)`
  background-color: blue;
`
