import CardContainer from "components/styles/CardContainer";
import colors from "constants/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import MenuSlide from "./MenuSlide";
import { menuMain } from "api/main";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import GlobalColor from "../styles/globalColor";
import { CampusEng } from "../../constants/campus";
const MEAL_TYPE = "아침";
export default function MainMenu({ selectCampus }) {
  const [cafeteria, setCafeteria] = useState([]);
  const navigate = useNavigate();
  const getCafeteria = async () => {
    const res = await menuMain(CampusEng[selectCampus]);
    setCafeteria(res);
  };

  const goMenu = () => {
    console.log("메뉴로 이동!!");
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
        cssMode={true}
        onClick={goMenu}
        $campus={GlobalColor.getColor()}
      >
        {cafeteria.map((c) => (
          <SwiperSlide key={c.cafeteriaId}>
            <Title>
              {c.cafeteriaName}
              <MealTypeText>{MEAL_TYPE}</MealTypeText>
            </Title>
            <MenuSlide menu={c.menus} />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </MenuContainer>
  );
}
const MealTypeText = styled.div`
  color: ${colors.GRAY300};
  font-size: 1.2rem;
  margin-left: 6px;
`;
const MenuContainer = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  padding: 0;
`;
const Title = styled.div`
  color: ${colors.BLACK};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
  width: 100%;
  padding-top: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SwiperContainer = styled(Swiper)`
  overflow: visible;
  margin-right: 2rem;
  margin-left: 2rem;
  .swiper-pagination {
    position: absolute;
  }

  .swiper-pagination-bullet {
    border: 1.5px solid ${colors.WHITE};
    opacity: 1;
    background-color: ${colors.GRAY200};
  }

  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: ${(props) => props.$campus};
  }
`;
