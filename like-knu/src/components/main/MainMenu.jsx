import styled from "styled-components"
import CardContainer from "components/CardContainer"
import colors from "constants/colors"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules'
import { useState, useEffect } from "react"
import MenuSlide from "./MenuSlide"
import { menu } from "api/main"
import "swiper/css"
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import TitleBox from "components/TitleBox"
import {useNavigate, useParams} from "react-router-dom";

export default function MainMenu() {
  const [cafeteria, setCafeteria]=useState([]);
  const navigate = useNavigate();

  const getCafeteria = async() => {
    const res = await menu();
    setCafeteria(res);
  }

  const goMenu = () => {
    console.log("메뉴로 이동!!");
    navigate(`/menu`);
  }
  useEffect( () => {
    getCafeteria();
  },[]);

  return (
    <MenuContainer>
      <Title onClick={goMenu}>식단</Title>
      <SwiperContainer
        slidesPerView="auto"
        modules={[Pagination, Navigation]}
        pagination={{clickable: true}}
        cssMode={true}
        onSlideChange={() => console.log("SLIDE CHANGE!!")}
      >
      {
        cafeteria.map((c) => (
          <Slide key={c.cafeteriaId}>
            <TitleBox text={c.cafeteriaName} margin_top="8px"/>
            <MenuSlide menu={c.menus} />
          </Slide>
        ))
      }
       
      </SwiperContainer>
    </MenuContainer>
  )
}
const MenuContainer = styled(CardContainer)`
  display:flex;
  flex-direction: column;
`
const Title = styled.div`
  color: ${colors.black};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2px;
  width: 100%;
  background-color: orange;
  padding-top: 16px;
`
const Slide=styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  height: auto;
`
const SwiperContainer=styled(Swiper)`

  overflow: visible;

  .swiper-pagination {
    position: relative;
    z-index: 1;
  }
  .swiper-pagination-bullet {
    border: 1.5px solid ${colors.white};
    opacity: 1;
    background-color: ${colors.gray350};
    // margin: 0 3px !important;
  }
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: ${colors.cheonAn};
  }
`

