import PageLayout from "../layouts/PageLayout";
import {PageHeader, Header} from "../components/styles/PageHeader";
import PageContainer from "../layouts/PageContainer";
import Tab from "../components/Tab";
import {getCampus} from "../utils/DeviceManageUtil";
import {TabItem, TabList} from "../components/styles/Tab";
import {useEffect, useState} from "react";
import Campus from "../constants/Campus";
import {menu} from "../api/menu";
import {MenuListItme} from "../components/menu/MenuListItme";
export default function MenuPage() {
  const [category, setCategory] = useState(0);
  const [menuList, setMenuList] = useState([]);
  const [mealList, setMealList] = useState([]);
  let campus = getCampus();
  const keys = Object.keys(Campus);
  campus = keys.find((key) => Campus[key] === campus);

  const getMenuList = async () => {
    const res = await menu(campus);
    console.log(res);
    setMenuList(res);
    setMealList(res[category].meal);
  }
  useEffect(() => {
    getMenuList();
  }, []);
  console.log(mealList);
  return (
      <PageLayout>
      <Header>
        <PageHeader>식단</PageHeader>
        <TabList>
          {
            menuList.map((cafeteria, index) => (
              <TabItem key={index} onClick={() => setCategory(index)} className={category === index ? "active" : null}>{cafeteria.cafeteriaName}</TabItem>
            ))
          }
        </TabList>
      </Header>
      <PageContainer>
        <MenuListItme menuList={mealList}></MenuListItme>
      </PageContainer>
      </PageLayout>
  )
}
