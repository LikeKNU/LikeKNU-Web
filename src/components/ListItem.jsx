import { ReactComponent as MarkerIcon } from 'assets/icon/dot.svg';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../constants/colors';
import { getCurrentDate } from '../utils/DateUtility';
import { isDarkMode } from '../utils/DeviceManageUtil';

export default function ListItem({ head, subHead, body, url, rendererPath, category }) {
  const isDateMatch = subHead === getCurrentDate();
  const navigate = useNavigate();

  function handleClick() {
    navigate('/notice/details', { state: { url: url, previousPath: rendererPath, category: category } });
  }

  return (
    <Wrapper onClick={handleClick}>
      <Detail>
        <div>{head}</div>
        <SubHeader>
          {isDateMatch && <StyledMarkerIcon fill={'red'} />}
          <div>{subHead}</div>
        </SubHeader>
      </Detail>
      <Title>{body}</Title>
    </Wrapper>
  );
}

const Detail = styled.div`
  color: ${!isDarkMode() ? colors.GRAY350 : colors.GRAY400};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.4rem;
  margin-bottom: 4px;
`;

const Title = styled.span`
  font-size: 1.4rem;
  color: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
`;

const Wrapper = styled.div`
  color: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 24px;
`;

const SubHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledMarkerIcon = styled(MarkerIcon)`
  width: 16px; // 아이콘 너비 조정
  height: 16px; // 아이콘 높이 조정
  margin-top: 0; // 아이콘과 텍스트 사이의 마진 조정
`;
