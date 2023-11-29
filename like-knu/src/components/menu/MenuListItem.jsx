import CardContainer from "../styles/CardContainer";
import styled from "styled-components";
import { menuIcon } from "../../assets/icon/menuIcon";
import colors from "../../constants/colors";
import { menu } from "../../api/menu";
export default function MenuListItem({ menuList }) {
  return (
    <Wrapper>
      {menuList !== undefined &&
        menuList.map((menu, index) => (
          <MenuCardContainer key={index}>
            <Title>
              <IconTitle>
                {menuIcon[index]}
                <MealType>{menu.mealType}</MealType>
              </IconTitle>
              {menu.operatingTime ? (
                <OperatingTime>{menu.operatingTime}</OperatingTime>
              ) : (
                <OperatingTime>운영하지 않음</OperatingTime>
              )}
            </Title>
            <Content>
              {menu.menus.map((menu, index) => (
                <div className={"menuItem"} key={index}>
                  {menu.menuName}
                </div>
              ))}
            </Content>
          </MenuCardContainer>
        ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 0 16px;
`;
const MenuCardContainer = styled(CardContainer)`
  box-shadow: none;
  border: 1px solid ${colors.GRAY80};
  color: ${colors.BLACK};
  font-size: 1.3rem;
  font-weight: 400;
  padding-top: 16px;
  margin-bottom: 16px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const IconTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Content = styled.div`
  margin-top: 12px;

  .menuItem {
    margin-bottom: 8px;
  }
`;
const MealType = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  margin-left: 10px;
`;
const OperatingTime = styled.div`
  color: ${colors.GRAY350};
`;
