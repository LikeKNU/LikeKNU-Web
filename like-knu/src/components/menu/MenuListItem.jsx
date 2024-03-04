import styled from 'styled-components';
import { menuIcon } from '../../assets/icon/menuIcon';
import colors from '../../constants/colors';
import { isDarkMode } from '../../utils/DeviceManageUtil';
import CardContainer from '../styles/CardContainer';

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
              {menu.menus.length === 0 && menu.operatingTime ? (
                <div className={'menuItem'}>등록된 메뉴가 없습니다</div>) : (
                menu.menus.map((menu, index) => (
                  <div className={'menuItem'} key={index}>
                    {menu.menuName}
                  </div>))
              )}
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
  border: 1px solid ${!isDarkMode() ? colors.GRAY80 : colors.GRAY600};
  color: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
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
