import PageLayout from "../layouts/PageLayout";
import { PageHeader, Header } from "../components/styles/PageHeader";
import { getCampus } from "../utils/DeviceManageUtil";
import { TabItem, TabList } from "../components/styles/Tab";
import { useEffect, useState } from "react";
import { CampusEng } from "../constants/campus";
import { menu } from "../api/menu";
import { MenuListItem } from "../components/menu/MenuListItem";
import { PAGE_NAME } from "../constants/pageName";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styled from "styled-components";
import { ReactComponent as PrevArrowIcon } from "../assets/icon/arrow_back_ios_new_black_24dp.svg";
import colors from "../constants/colors";

export default function MenuPage() {
  const [category, setCategory] = useState(0);
  const [menuList, setMenuList] = useState([]);
  const [mealList, setMealList] = useState([]);
  const [today, setToday] = useState("오늘");
  let campus = CampusEng[getCampus()];

  const getMenuList = async () => {
    const res = await menu(campus);
    console.log(res);
    setMenuList(res);
    setMealList(res[category].meal);
  };
  useEffect(() => {
    getMenuList();
  }, []);

  useEffect(() => {
    if (mealList.length !== 0) {
      setMealList(menuList[category].meal);
    }
  }, [category]);

  const toggleToday = () => {
    setToday((prev) => (prev === "오늘" ? "내일" : "오늘"));
  };

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
        <TitleArea>
          <StyledArrowIcon className={"swiper-prev"} />
          <Title>{today}</Title>
          <StyledArrowIcon className={"swiper-next"} />
        </TitleArea>
        <Swiper
          className={"my-swiper"}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          modules={[Navigation]}
          onSlideChange={() => toggleToday()}
          initialSlide={0}
        >
          <SwiperSlide>
            <MenuListItem menuList={mealList}></MenuListItem>
          </SwiperSlide>
          <SwiperSlide>
            <MenuListItem menuList={mealList}></MenuListItem>
          </SwiperSlide>
        </Swiper>
      </StyledPageContainer>
    </PageLayout>
  );
}
const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0 18px;
  color: ${colors.BLACK};
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
const StyledArrowIcon = styled(PrevArrowIcon)`
  position: relative;
  z-index: 10;
  fill: ${colors.BLACK};
  width: 16px;
  height: 16px;
`;
const StyledPageContainer = styled.div`
  height: 100vh;
  position: relative;
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
