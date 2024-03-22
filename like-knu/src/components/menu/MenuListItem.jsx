import styled from 'styled-components';
import { menuIcon } from '../../assets/icon/menuIcon';
import colors from '../../constants/colors';
import { isDarkMode } from '../../utils/DeviceManageUtil';
import CardContainer from '../styles/CardContainer';

export default function MenuListItem({ menuList }) {
  return (
    <Wrapper>
      {menuList !== undefined &&
      menuList.some(menu => menu.operatingTime) ?
        (menuList.map((menu, index) => (
          menu.operatingTime ? (
            <MenuCardContainer key={index}>
              <Title>
                <IconTitle>
                  {menuIcon[index]}
                  <MealType>{menu.mealType}</MealType>
                </IconTitle>
                <OperatingTime>{menu.operatingTime}</OperatingTime>
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
          ) : (<div></div>)
        ))) : (<NoOperatingMessage>운영하지 않는 날이에요</NoOperatingMessage>)}
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
    font-size: 1.3rem;
    font-weight: 450;
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

const NoOperatingMessage = styled.div`
  height: 50vh;
  margin-top: 12px;
  text-align: center;
  align-content: center;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${!isDarkMode() ? colors.GRAY400 : colors.GRAY300};
`;
