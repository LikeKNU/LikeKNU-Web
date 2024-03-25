import React, { useEffect, useState } from 'react';
import { menuAPI } from '../api/menuAPI';
import { MenuSwiper } from '../components/menu/MenuSwiper';
import { Header, PageHeader } from '../components/styles/PageHeader';
import { TabItem, TabList } from '../components/styles/Tab';
import { CampusEng } from '../constants/campus';
import { PAGE_NAME } from '../constants/pageName';
import KakaoAdFit from '../KakaoAdFit';
import PageLayout from '../layouts/PageLayout';
import { getCampus, getPinnedCafeteria, pinCafeteria } from '../utils/DeviceManageUtil';
import { sortPinElementTop } from '../utils/ReorderList';

export default function MenuPage() {
  const [category, setCategory] = useState(0);
  const [menuList, setMenuList] = useState([]);
  const [mealList, setMealList] = useState([]);
  const [menuSwiper, setMenuSwiper] = useState(null);
  const [pin, setPin] = useState(getPinnedCafeteria());
  let campus = CampusEng[getCampus()];

  const getMenuList = async () => {
    const response = await menuAPI(campus);
    const sortedCafeterias = sortPinElementTop(response, cafeteria => cafeteria.cafeteriaId === pin);
    setMenuList(sortedCafeterias);
    setMealList(sortedCafeterias[category]);
  };

  const isPinnedCafeteria = () => {
    return pin === mealList.cafeteriaId;
  }

  const changePin = () => {
    if (isPinnedCafeteria()) {
      setPin(null);
      pinCafeteria(null);
    } else {
      setPin(mealList.cafeteriaId);
      pinCafeteria(mealList.cafeteriaId);
    }
    setCategory(0);
  };

  useEffect(() => {
    getMenuList();
  }, [pin]);

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
      <KakaoAdFit unit={'DAN-Nugravqf3orTiH3Q'} width={'320'} height={'50'} disabled={false} top={'99px'} />
      <MenuSwiper mealList={mealList} setMenuSwiper={setMenuSwiper} changePinCallback={changePin}
                  isPinned={isPinnedCafeteria()} />
    </PageLayout>
  );
}
