import { useState } from 'react';
import styled from 'styled-components';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as PrevArrowIcon } from '../../assets/icon/arrow_back_ios_new_black_24dp.svg';
import { ReactComponent as FillPin } from '../../assets/icon/pin-angle-fill.svg';
import { ReactComponent as Pin } from '../../assets/icon/pin-angle.svg';
import colors from '../../constants/colors';
import { isDarkMode } from '../../utils/DeviceManageUtil';
import MenuListItem from './MenuListItem';

export function MenuSwiper({ setMenuSwiper, cafeteriaMeals, isPinned, changePinCallback }) {
  const [today, setToday] = useState('오늘');
  const [date, setDate] = useState(new Date());
  const day = ['일', '월', '화', '수', '목', '금', '토'];

  const toggleToday = () => {
    if (today === '오늘') {
      date.setDate(date.getDate() + 1);
      setDate(date);
    } else {
      setDate(new Date());
    }
    setToday((prev) => (prev === '오늘' ? '내일' : '오늘'));
  };

  return (
    <StyledPageContainer>
      <TitleArea>
        <StyledArrowIcon className={'swiper-prev'} />
        <Title>{`${today} (${day[date.getDay()]})`}</Title>
        <StyledArrowIcon className={'swiper-next'} />
        {isPinned ? <StyledFillPin onClick={changePinCallback} /> : <StyledPin onClick={changePinCallback} />}
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
        {cafeteriaMeals ? cafeteriaMeals.map(cafeteriaMeal =>
          <SwiperSlide>
            <MenuListItem meals={cafeteriaMeal.meals} date={cafeteriaMeal.date} />
          </SwiperSlide>) : <></>}
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
    margin-top: 214px;
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
  top: 174px;
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
  z-index: 8;
  fill: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
  width: 16px;
  height: 16px;
`;

const StyledPin = styled(Pin)`
  position: absolute;
  right: 30px;
  width: 22px;
  height: 22px;
  fill: ${!isDarkMode() ? colors.GRAY400 : colors.DARK_WHITE};
  z-index: 3;
`;

const StyledFillPin = styled(FillPin)`
  position: absolute;
  right: 30px;
  width: 22px;
  height: 22px;
  fill: #F04452;
  z-index: 3;
`;
