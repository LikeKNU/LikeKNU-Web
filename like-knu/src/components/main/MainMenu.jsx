import { menuMain } from 'api/main';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CardContainer from 'components/styles/CardContainer';
import colors from 'constants/colors';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CampusEng } from '../../constants/campus';
import { isDarkMode } from '../../utils/DeviceManageUtil';
import GlobalColor from '../styles/globalColor';
import MenuSlide from './MenuSlide';

export default function MainMenu({ selectCampus }) {
  const [cafeteria, setCafeteria] = useState([]);
  const navigate = useNavigate();
  const getCafeteria = async () => {
    const res = await menuMain(CampusEng[selectCampus]);
    setCafeteria(res);
  };

  const goMenu = () => {
    navigate(`/menu`);
  };
  useEffect(() => {
    getCafeteria();
  }, [selectCampus]);
  return (
    <MenuContainer>
      <SwiperContainer
        slidesPerView="auto"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        onClick={goMenu}
        $campus={GlobalColor.getColor()}
      >
        {cafeteria.map((c) => (
          <SwiperSlide key={c.cafeteriaId}>
            <Title>
              {c.cafeteriaName}
              <MealTypeText>{c.mealType}</MealTypeText>
            </Title>
            <MenuSlide menu={c.menus} />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </MenuContainer>
  );
}
const MealTypeText = styled.div`
  color: ${!isDarkMode() ? colors.GRAY300 : colors.GRAY400};
  font-size: 1.2rem;
  margin-left: 6px;
  display: inline-block;
`;
const MenuContainer = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  padding: 0;
`;
const Title = styled.div`
  color: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
  width: 100%;
  padding-top: 16px;
  align-items: center;
`;
const SwiperContainer = styled(Swiper)`
  margin-right: 2rem;
  margin-left: 2rem;

  .swiper-pagination {
    position: absolute;
  }

  .swiper-pagination-bullet {
    border: 1.5px solid ${!isDarkMode() ? colors.WHITE : colors.DARK};
    opacity: 1;
    background-color: ${!isDarkMode() ? colors.GRAY200 : colors.GRAY500};
  }

  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: ${(props) => props.$campus};
  }
`;
