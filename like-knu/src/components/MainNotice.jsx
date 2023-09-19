import styled from "styled-components"
import CardContainer from "./CardContainer"
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
    <CardContainer>
      <Title>공지사항</Title>
      {
        notices.map((notice) => (
          <Text key={notice.announcementId}>{notice.announcementTitle}</Text>
        ))
      }
    </CardContainer>
  )
}
const Text = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-bottom: 10px;
  color: ${colors.black};
  font-size: 1.3rem;
  font-weight: 400;
`
const Title = styled.div`
  color: ${colors.black};
  font-size: 1.8rem;
  font-weight: 700;
  padding-bottom: 15px;

`