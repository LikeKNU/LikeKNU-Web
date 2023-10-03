import React from 'react'
import PageLayout from "layouts/PageLayout";
import PageContainer from "layouts/PageContainer";
import BackHeader from "components/BackHeader";
export default function NoticePage() {
  return (
    <PageLayout>
      <BackHeader pageName={"공지사항"}/>
      <PageContainer>
      </PageContainer>
    </PageLayout>
  )
}
