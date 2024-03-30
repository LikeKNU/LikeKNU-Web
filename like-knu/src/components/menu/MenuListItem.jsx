import styled from 'styled-components';
import { menuIcon } from '../../assets/icon/menuIcon';
import colors from '../../constants/colors';
import { isDarkMode } from '../../utils/DeviceManageUtil';
import CardContainer from '../styles/CardContainer';
import ThumbsItem from './ThumbsItem';

export default function MenuListItem({ meals }) {
  console.log('MenuListItem.meals = ', meals);
  return (
    <Wrapper>
      {meals !== undefined && meals.some(menu => menu.operatingTime) ?
        (meals.map((meal, index) => (
          meal.operatingTime ? (
            <MenuCardContainer key={meal.mealType + meal.menus}>
              <Title>
                <IconTitle>
                  {menuIcon[index]}
                  <MealType>{meal.mealType}</MealType>
                </IconTitle>
                <OperatingTime>{meal.operatingTime}</OperatingTime>
              </Title>
              <Content>
                {meal.menus === null && meal.operatingTime ? (
                  <div className={'menuItem'}>등록된 메뉴가 없습니다</div>) : (
                  meal.menus.split(' ')
                    .map((menu, index) => (
                      <div className={'menuItem'} key={index}>
                        {menu}
                      </div>))
                )}
              </Content>
              {/*{meal.menuId !== null ? <ThumbsItem /> : <></>}*/}
            </MenuCardContainer>
          ) : (<div></div>)
        ))) : (<NoOperatingMessage>운영하지 않는 날이에요</NoOperatingMessage>)}
    </Wrapper>
  );
};

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
  position: relative;
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
