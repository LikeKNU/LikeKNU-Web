import colors from 'constants/colors';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { isDarkMode } from '../../utils/DeviceManageUtil';

export default function MenuSlide({ menu }) {
  const [newMenu, setNewMenu] = useState([]);
  const [isOver, setIsOver] = useState(false);
  const count = Object.keys(menu).length;
  const slice = 5;
  const [isEmpty, setIsEmpty] = useState(false);

  // 메뉴 개수 세서 새로운 객체에 저장하는 함수
  const countMenu = () => {
    let newObj = [];

    const isCntBig = () => {
      return count > slice ? slice : count;
    };

    for (let i = 0; i < isCntBig(); i++) {
      //0~3
      newObj[i] = menu[i];
    }
    return newObj;
  };

  // 메뉴 개수가 slice 이상인지 확인하는 함수
  const funIsOver = () => {
    if (count > slice) {
      setIsOver(true);
    }
  };

  const funIsEmpty = () => {
    if (count === 0) {
      setIsEmpty(true);
    }
  };

  useEffect(() => {
    setNewMenu(countMenu());
    funIsEmpty();
    funIsOver();
  }, []);

  return (
    <Wrapper>
      {newMenu.map((menu) => (
        <Text key={menu.menuId}>{menu.menuName}</Text>
      ))}
      {isOver && <MoreMenu>•••</MoreMenu>}
      {isEmpty && <NoMenu>메뉴 없음</NoMenu>}
    </Wrapper>
  );
}
const NoMenu = styled.div`
  color: ${!isDarkMode() ? colors.GRAY400 : colors.GRAY300};
`;
const MoreMenu = styled.div`
  color: ${!isDarkMode() ? colors.GRAY500 : colors.GRAY300};
  margin-bottom: 4px;
`;
const Text = styled.div`
  margin-bottom: 8px;
  font-weight: 450;
`;
const Wrapper = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
  display: flex;
  flex-direction: column;
  height: 160px;
`;
