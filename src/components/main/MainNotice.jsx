import { noticeMainAPI } from 'api/main';
import CardContainer from 'components/styles/CardContainer';
import colors from 'constants/colors';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as RightArrowIcon } from '../../assets/icon/right-arrow.svg';
import { CampusEng } from '../../constants/campus';
import { PAGE_NAME } from '../../constants/pageName';
import { isDarkMode } from '../../utils/DeviceManageUtil';

export default function MainNotice({ selectCampus }) {
  const [notices, setNotices] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const goNotice = () => {
    navigate(`/notice`);
  };
  const getNotices = async () => {
    const res = await noticeMainAPI(CampusEng[selectCampus]);
    setNotices(res);
  };

  useEffect(() => {
    getNotices();
  }, [selectCampus]);

  return (
    <NoticeContainer>
      <Title onClick={goNotice}>{PAGE_NAME.NOTICE}</Title>
      {notices.map((notice) => (
        <Text key={notice.announcementId} onClick={() => navigate('/notice/details', {
          state: {
            url: notice.announcementUrl,
            previousPath: location.pathname
          }
        })}>
          {notice.announcementTitle}
        </Text>
      ))}
    </NoticeContainer>
  );
}

const NoticeContainer = styled(CardContainer)`
  height: 141px;
  grid-column: 1 / 3;
`;

const Text = styled.div`
  color: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
  font-size: 1.3rem;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-bottom: 12px;

  .notice_link {
    color: ${colors.DARK_GRAY};
  }
`;

const Title = styled.div`
  color: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 16px;
  width: 100%;
  padding-top: 16px;
  display: flex;
  align-items: center;
`;
