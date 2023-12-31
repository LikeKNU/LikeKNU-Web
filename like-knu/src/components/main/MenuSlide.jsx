import { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "constants/colors";
export default function MenuSlide({ menu }) {
  const [newMenu, setNewMenu] = useState([]); //메뉴스
  const [isOver, setIsOver] = useState(false);
  const cnt = Object.keys(menu).length;
  const slice = 5;
  const [isEmpty, setIsEmpty] = useState(false);

  // 메뉴 개수 세서 새로운 객체에 저장하는 함수
  const countMenu = () => {
    let newObj = [];

    const isCntBig = () => {
      return cnt > slice ? slice : cnt;
    };

    for (let i = 0; i < isCntBig(); i++) {
      //0~3
      newObj[i] = menu[i];
    }
    return newObj;
  };

  // 메뉴 개수가 slice 이상인지 확인하는 함수
  const funIsOver = () => {
    if (cnt > slice) {
      setIsOver(true);
      console.log(isOver);
    }
  };
  const funIsEmpty = () => {
    if (cnt === 0) {
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
      {isOver && <MoreMenu>+더보기</MoreMenu>}
      {isEmpty && <NoMenu>메뉴 없음</NoMenu>}
    </Wrapper>
  );
}
const NoMenu = styled.div`
  color: ${colors.GRAY400};
`;
const MoreMenu = styled.div`
  color: ${colors.COMMON};
  margin-bottom: 4px;
`;
const Text = styled.div`
  margin-bottom: 8px;
`;
const Wrapper = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${colors.BLACK};
  display: flex;
  flex-direction: column;
  height: 160px;
`;
