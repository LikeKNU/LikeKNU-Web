import { ReactComponent as MarkerIcon } from 'assets/icon/dot.svg';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import { getCurrentDate } from '../../utils/DateUtility';
import { isDarkMode } from '../../utils/DeviceManageUtil';

const AnnouncementListItem = ({ body, subtitle, date, url, rendererPath, category }) => {
  const navigate = useNavigate();
  const isToday = date === getCurrentDate();

  const handleClick = () => {
    navigate('/notice/details', { state: { url: url, previousPath: rendererPath, category: category } });
  }

  return (
    <Container onClick={handleClick}>
      <BodyText>{body}</BodyText>
      <AdditionalContainer>
        <SubtitleText>{subtitle + ' | ' + date}</SubtitleText>
        {isToday && <StyledMarkerIcon fill={'red'} />}
      </AdditionalContainer>
    </Container>
  );
};

export default AnnouncementListItem;

const Container = styled.div`
  padding: 16px 0;
  border-bottom: 0.5px solid ${!isDarkMode() ? Colors.GRAY100 : Colors.GRAY650};
`;

const BodyText = styled.span`
  color: ${!isDarkMode() ? Colors.BLACK : Colors.DARK_WHITE};
  font-size: 15px;
  font-weight: 500;
`;

const AdditionalContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4px;
`;

const SubtitleText = styled.span`
  color: ${!isDarkMode() ? Colors.GRAY500 : Colors.GRAY300};
  font-size: 13px;
`;

const StyledMarkerIcon = styled(MarkerIcon)`
  width: 16px;
  height: 16px;
  margin-top: 0;
`;
