import styled from "styled-components"
import CardContainer from "components/CardContainer"
import { notice } from "api/main"
import colors from "constants/colors"
import { useEffect, useState } from "react"

export default function MainNotice() {
  const [notices, setNotices] = useState([]);


  const getNotices = async() => {
    const res = await notice();
    setNotices(res);
  }
  useEffect( () => {
    getNotices();
  },[]);
  
  return (
    <NoticeContainer>
      <Title>공지사항</Title>
      {
        notices.map((notice) => (
          <Text key={notice.announcementId}>
            <a href={"https://www.youtube.com/"} className="notice_link">
              {notice.announcementTitle}
            </a>
          </Text>
        ))
      }
    </NoticeContainer>
  )
}
const NoticeContainer = styled(CardContainer)`
  height: 141px;
  grid-column: 1 / 3;
`
const Text = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-bottom: 10px;
  font-size: 1.3rem;
  font-weight: 400;

  .notice_link {
    color: ${colors.black};
    width: 100%;
  }
`
const Title = styled.div`
  color: ${colors.black};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 15px;

`