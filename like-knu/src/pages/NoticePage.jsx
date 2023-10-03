import React from 'react'
import PageLayout from "layouts/PageLayout";
import PageContainer from "layouts/PageContainer";
import BackHeader from "components/BackHeader";
import {NoticeList} from "components/notice/NoticeList";
export default function NoticePage() {
  return (
    <PageLayout>
      <BackHeader pageName={"공지사항"}/>
      <PageContainer>
        <NoticeList />
      </PageContainer>
    </PageLayout>
  )
}
