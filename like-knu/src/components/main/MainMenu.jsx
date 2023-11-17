import CardContainer from "components/styles/CardContainer";
import colors from "constants/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import MenuSlide from "./MenuSlide";
import { menuMain } from "api/main";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";

export default function MainMenu() {
  const [cafeteria, setCafeteria] = useState([]);
  const navigate = useNavigate();
  const campus = useParams();
  const getCafeteria = async () => {
    const res = await menuMain(campus.campus);
    setCafeteria(res);
  };

  const goMenu = () => {
    console.log("메뉴로 이동!!");
    navigate(`/menu`);
  };
  useEffect(() => {
    getCafeteria();
  }, [campus]);
  return (
    <MenuContainer>
      <SwiperContainer
        slidesPerView="auto"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        cssMode={true}
        onClick={goMenu}
      >
        {cafeteria.map((c) => (
          <SwiperSlide key={c.cafeteriaId}>
            <Title>{c.cafeteriaName}</Title>
            <MenuSlide menu={c.menus} />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </MenuContainer>
  );
}
const MenuContainer = styled(CardContainer)`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  color: ${colors.BLACK};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
  width: 100%;
  padding-top: 16px;
`;
const Slide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  height: auto;
`;
const SwiperContainer = styled(Swiper)`
  overflow: visible;

  .swiper-pagination {
    position: absolute;
  }

  .swiper-pagination-bullet {
    border: 1.5px solid ${colors.WHITE};
    opacity: 1;
    background-color: ${colors.GRAY350};
    // margin: 0 3px !important;
  }

  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: ${colors.COMMON};
  }
`;
