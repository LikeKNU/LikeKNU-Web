import PageLayout from "../layouts/PageLayout";
import { PageHeader, Header } from "../components/styles/PageHeader";
import { getCampus } from "../utils/DeviceManageUtil";
import { TabItem, TabList } from "../components/styles/Tab";
import { useEffect, useState } from "react";
import { CampusEng } from "../constants/campus";
import { menu } from "../api/menu";
import { PAGE_NAME } from "../constants/pageName";
import { MenuSwiper } from "../components/menu/MenuSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styled from "styled-components";
import colors from "../constants/colors";
import { ReactComponent as PrevArrowIcon } from "../assets/icon/arrow_back_ios_new_black_24dp.svg";
import MenuListItem from "../components/menu/MenuListItem";

export default function MenuPage() {
  const [category, setCategory] = useState(0);
  const [menuList, setMenuList] = useState([]);
  const [mealList, setMealList] = useState([]);
  // const [menuSwiper, setMenuSwiper] = useState(null);
  let campus = CampusEng[getCampus()];
  // const [todayText, setTodayText] = useState("오늘");

  // const toggleToday = () => {
  //   setTodayText((prev) => (prev === "오늘" ? "내일" : "오늘"));
  //   setMealList(menuList[category].tomorrow);
  // };

  const getMenuList = async () => {
    const res = await menu(campus);
    console.log(res[category]);
    console.log(res);
    setMenuList(res);
    setMealList(res[category].today);
  };
  useEffect(() => {
    getMenuList();
  }, []);

  useEffect(() => {
    if (mealList.length !== 0) {
      setMealList(menuList[category].today);
    }
    // if (menuSwiper !== null) {
    //   menuSwiper.slideTo(0);
    // }
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
              className={category === index ? "active" : null}
            >
              {cafeteria.cafeteriaName}
            </TabItem>
          ))}
        </TabList>
      </Header>
      <StyledPageContainer>
        <MenuListItem menuList={mealList} />
        {/*<TitleArea>*/}
        {/*  <StyledArrowIcon className={"swiper-prev"} />*/}
        {/*  <Title>{todayText}</Title>*/}
        {/*  <StyledArrowIcon className={"swiper-next"} />*/}
        {/*</TitleArea>*/}
        {/*<Swiper*/}
        {/*  className={"my-swiper"}*/}
        {/*  navigation={{*/}
        {/*    nextEl: ".swiper-next",*/}
        {/*    prevEl: ".swiper-prev",*/}
        {/*  }}*/}
        {/*  modules={[Navigation]}*/}
        {/*  onSlideChange={() => toggleToday()}*/}
        {/*  onSwiper={(swiper) => setMenuSwiper(swiper)}*/}
        {/*>*/}
        {/*  <SwiperSlide>*/}
        {/*    <MenuListItem menuList={mealList["today"]} />*/}
        {/*  </SwiperSlide>*/}
        {/*  <SwiperSlide>*/}
        {/*    <MenuListItem menuList={mealList["tomorrow"]} />*/}
        {/*  </SwiperSlide>*/}
        {/*</Swiper>*/}
      </StyledPageContainer>
    </PageLayout>
  );
}
const StyledPageContainer = styled.div`
  height: 100vh;
  position: relative;
  margin-top: 140px;
  margin-bottom: 100px;
  .my-swiper {
    height: 100%;
  }
  .my-swiper .swiper-wrapper .swiper-slide {
    padding-top: 170px;
  }
  .swiper-prev {
  }
  .swiper-next {
    transform: scaleX(-1);
  }
  .swiper-button-disabled {
    opacity: 0.2;
  }
`;
const TitleArea = styled.div`
  position: absolute;
  top: 130px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0 18px;
  color: ${colors.BLACK};
`;

const StyledArrowIcon = styled(PrevArrowIcon)`
  position: relative;
  z-index: 10;
  fill: ${colors.BLACK};
  width: 16px;
  height: 16px;
`;
