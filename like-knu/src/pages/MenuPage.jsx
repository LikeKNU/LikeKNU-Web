import React, { useEffect, useState } from 'react';
import { menuAPI } from '../api/menuAPI';
import { MenuSwiper } from '../components/menu/MenuSwiper';
import { Header, PageHeader } from '../components/styles/PageHeader';
import { TabItem, TabList } from '../components/styles/Tab';
import { CAFETERIA } from '../constants/cafeteria';
import { CampusEng } from '../constants/campus';
import { PAGE_NAME } from '../constants/pageName';
import KakaoAdFit from '../KakaoAdFit';
import PageLayout from '../layouts/PageLayout';
import { getCampus, getPinnedCafeteria, pinCafeteria } from '../utils/DeviceManageUtil';
import { sortPinElementTop } from '../utils/ReorderList';

export default function MenuPage() {
  const [cafeteria, setCafeteria] = useState();
  const [cafeterias, setCafeterias] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const [mealList, setMealList] = useState([]);
  const [menuSwiper, setMenuSwiper] = useState(null);
  const [pin, setPin] = useState(getPinnedCafeteria());
  let campus = CampusEng[getCampus()];

  useEffect(() => {
    initializeCafeterias();
  }, []);

  useEffect(() => {
    initializeCafeterias();
  }, [pin]);

  useEffect(() => {
    getMenuList();
    if (mealList.length !== 0) {
      setMealList(menuList[cafeteria]);
    }
    if (menuSwiper !== null) {
      menuSwiper.slideTo(0);
    }
  }, [cafeteria]);

  const getMenuList = async () => {
    const response = await menuAPI(campus, cafeteria);
    setMenuList(response);
  };

  const initializeCafeterias = async () => {
    const sortedCafeterias = sortPinElementTop(CAFETERIA[campus], cafeteria => cafeteria === pin);
    setCafeterias(sortedCafeterias);
    setCafeteria(sortedCafeterias[0]);
  };

  const isPinnedCafeteria = () => {
    return pin === cafeteria;
  }

  const changePin = () => {
    if (isPinnedCafeteria()) {
      setPin(null);
      pinCafeteria(null);
    } else {
      setPin(cafeteria);
      pinCafeteria(cafeteria);
    }
  };

  return (
    <PageLayout>
      <Header>
        <PageHeader>{PAGE_NAME.MENU}</PageHeader>
        <TabList>
          {cafeterias.map((cafeteriaName) => (
            <TabItem
              key={cafeteriaName}
              onClick={() => setCafeteria(cafeteriaName)}
              className={cafeteriaName === cafeteria ? 'active' : null}>
              {cafeteriaName}
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
