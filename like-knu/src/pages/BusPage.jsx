import PageLayout from "layouts/PageLayout";
import {PageHeader, Header} from "components/styles/PageHeader";
import PageContainer from "layouts/PageContainer";
import {busTab, apiBusTabList, noticeTab} from "../constants/tabName";
import {TabList, TabItem} from "../components/styles/Tab";
import {useEffect, useState} from "react";
import {cityBusesRoutes} from "../api/bus";
import {getCampus} from "../utils/DeviceManageUtil";
import Campus from "../constants/campus";
import styled from "styled-components";
export default function BusPage() {
  const [category, setCategory] = useState(0);
  const [routes, setRoutes] = useState([]);
  const routeId = ["routeId", "셔틀아이디"]

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
            {
              busTab.map((name, index) => (
                <TabItem key={index} onClick={() => setCategory(index)} className={category === index ? "active" : null}>{name}</TabItem>
              ))
            }
          </TabList>
        </Header>

        {
          (category === 0) &&
          <StyledCityBusPageContainer>
            모시깽
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
