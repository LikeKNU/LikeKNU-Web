import PageLayout from "../layouts/PageLayout";
import {PageHeader, Header} from "../components/styles/PageHeader";
import PageContainer from "../layouts/PageContainer";
import {getCampus} from "../utils/DeviceManageUtil";
import {TabItem, TabList} from "../components/styles/Tab";
import {useEffect, useState} from "react";
import Campus from "../constants/campus";
import {menu} from "../api/menu";
import {MenuListItem} from "../components/menu/MenuListItem";

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

  useEffect(() => {
    if(mealList.length !== 0) {
      setMealList(menuList[category].meal);
    }
  }, [category]);

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
        <MenuListItem menuList={mealList}></MenuListItem>
      </PageContainer>
      </PageLayout>
  )
}
