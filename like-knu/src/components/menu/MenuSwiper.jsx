import { useState } from 'react';
import styled from 'styled-components';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as PrevArrowIcon } from '../../assets/icon/arrow_back_ios_new_black_24dp.svg';
import colors from '../../constants/colors';
import { isDarkMode } from '../../utils/DeviceManageUtil';
import MenuListItem from './MenuListItem';

export function MenuSwiper({ setMenuSwiper, mealList }) {
  const [today, setToday] = useState('오늘');

  const toggleToday = () => {
    setToday((prev) => (prev === '오늘' ? '내일' : '오늘'));
  };

  return (
    <StyledPageContainer>
      <TitleArea>
        <StyledArrowIcon className={'swiper-prev'} />
        <Title>{today}</Title>
        <StyledArrowIcon className={'swiper-next'} />
      </TitleArea>
      <Swiper
        className={'my-swiper'}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
        modules={[Navigation]}
        onSlideChange={() => toggleToday()}
        onSwiper={(swiper) => setMenuSwiper(swiper)}
      >
        <SwiperSlide>
          <MenuListItem menuList={mealList['today']} />
        </SwiperSlide>
        <SwiperSlide>
          <MenuListItem menuList={mealList['tomorrow']} />
        </SwiperSlide>
      </Swiper>
    </StyledPageContainer>
  );
}

const StyledPageContainer = styled.div`
  position: relative;
  margin-bottom: 90px;

  .my-swiper {
    height: 100%;
  }

  .my-swiper .swiper-wrapper .swiper-slide {
    margin-top: 170px;
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
  color: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
`;

const StyledArrowIcon = styled(PrevArrowIcon)`
  position: relative;
  z-index: 10;
  fill: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
  width: 16px;
  height: 16px;
`;
