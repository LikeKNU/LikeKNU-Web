import { Campus } from 'constants/campus';
import colors from 'constants/colors';
import styled from 'styled-components';
import { getCampus, isDarkMode, setCampus } from 'utils/DeviceManageUtil';
import { setDeviceCampus } from '../../api/device';

export default function DropDown({ setSelectCampus }) {
  // 이름 클릭시, 캠퍼스 세팅
  const setCampusHandler = (e) => {
    setSelectCampus(e.target.textContent);
    setCampus(e.target.textContent);

    let selectedCampus = getCampus();
    const keys = Object.keys(Campus);
    let selectCampus = keys.find((key) => Campus[key] === selectedCampus);
    setDeviceCampus(selectCampus);
  };
  return (
    <Wrapper>
      <CampusItem>
        <div onClick={setCampusHandler}>{Campus.SINGWAN}</div>
      </CampusItem>
      <Line />
      <CampusItem>
        <div onClick={setCampusHandler}>{Campus.CHEONAN}</div>
      </CampusItem>
      <Line />
      <CampusItem>
        <div onClick={setCampusHandler}>{Campus.YESAN}</div>
      </CampusItem>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: ${!isDarkMode() ? colors.WHITE : colors.DARK};
  list-style: none;
  z-index: 10;
  position: absolute;
  left: 16px;
  top: 55px;
  border-radius: 5px;
  padding: 5px 20px;
  border: 1px solid ${!isDarkMode() ? colors.GRAY200 : colors.GRAY500};
`;
const CampusItem = styled.li`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
  padding: 5px 15px;
`;
const Line = styled.hr`
  border: none;
  height: 1px;
  background-color: ${!isDarkMode() ? colors.GRAY100 : colors.GRAY600};
`;
