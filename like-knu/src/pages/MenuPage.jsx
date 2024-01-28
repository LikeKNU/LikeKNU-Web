import React, { useEffect, useState } from 'react';
import { menu } from '../api/menu';
import { MenuSwiper } from '../components/menu/MenuSwiper';
import { Header, PageHeader } from '../components/styles/PageHeader';
import { TabItem, TabList } from '../components/styles/Tab';
import { CampusEng } from '../constants/campus';
import { PAGE_NAME } from '../constants/pageName';
import KakaoAdFit from '../KakaoAdFit';
import PageLayout from '../layouts/PageLayout';
import { getCampus } from '../utils/DeviceManageUtil';

export default function MenuPage() {
  const [category, setCategory] = useState(0);
  const [menuList, setMenuList] = useState([]);
  const [mealList, setMealList] = useState([]);
  const [menuSwiper, setMenuSwiper] = useState(null);
  let campus = CampusEng[getCampus()];

  const getMenuList = async () => {
    const res = await menu(campus);
    console.log(res[category]);
    console.log(res);
    setMenuList(res);
    setMealList(res[category]);
  };
  useEffect(() => {
    getMenuList();
  }, []);

  useEffect(() => {
    if (mealList.length !== 0) {
      setMealList(menuList[category]);
    }
    if (menuSwiper !== null) {
      menuSwiper.slideTo(0);
    }
  }, [category]);
  return (
    <PageLayout>
      <Header>
        <PageHeader>{PAGE_NAME.MENU}</PageHeader>
        <TabList>
          {menuList.map((cafeteria, index) => (
            <TabItem
              key={index}
              onClick={() => setCategory(index)}
              className={category === index ? 'active' : null}
            >
              {cafeteria.cafeteriaName}
            </TabItem>
          ))}
        </TabList>
      </Header>
      <KakaoAdFit unit={'DAN-fVYT1aWQnMOribRe'} width={'320'} height={'100'} disabled={false}
                  style={{ marginTop: '100px' }}></KakaoAdFit>
      <MenuSwiper mealList={mealList} setMenuSwiper={setMenuSwiper} />
    </PageLayout>
  );
}
