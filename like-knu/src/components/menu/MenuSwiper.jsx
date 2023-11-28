import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MenuListItem } from "./MenuListItem";
import styled from "styled-components";
import colors from "../../constants/colors";
import { useState } from "react";
import { ReactComponent as PrevArrowIcon } from "../../assets/icon/arrow_back_ios_new_black_24dp.svg";

export function MenuSwiper({ setMenuSwiper, mealList }) {
  const [today, setToday] = useState("오늘");

  const toggleToday = () => {
    setToday((prev) => (prev === "오늘" ? "내일" : "오늘"));
  };
  return (
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
        onSwiper={(swiper) => setMenuSwiper(swiper)}
      >
        <SwiperSlide>
          <MenuListItem menuList={mealList["today"]}></MenuListItem>
        </SwiperSlide>
        <SwiperSlide>
          <MenuListItem menuList={mealList["tomorrow"]}></MenuListItem>
        </SwiperSlide>
      </Swiper>
    </StyledPageContainer>
  );
}

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
