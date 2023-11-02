import PageLayout from "../layouts/PageLayout";
import { BackHeader } from "../components/BackHeader";
import styled from "styled-components";
import { useState } from "react";
import PageContainer from "../layouts/PageContainer";
import TagList from "../components/setting/TagList";
import colors from "../constants/colors";

export default function SettingNotificationPage() {
  return (
    <PageLayout>
      <BackHeader Title={"공지사항 알림 구독"} />
      <StyledPageContainer>
        <NotificationTag>
          <Title>공지사항 태그</Title>
          <Detail>알림을 받고 싶은 태그를 선택해주세요!</Detail>
          <TagList />
        </NotificationTag>
      </StyledPageContainer>
    </PageLayout>
  );
}

const StyledPageContainer = styled(PageContainer)`
  padding-top: 20px;
`;
const NotificationTag = styled.div``;
const Title = styled.div`
  font-size: 1.8rem;
  color: ${colors.black};
  font-weight: 600;
  margin-bottom: 4px;
`;
const Detail = styled.div`
  font-size: 1.4rem;
  color: ${colors.gray400};
  margin-bottom: 20px;
`;
