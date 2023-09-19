import MainNotice from 'components/MainNotice'
import React from 'react'
import PageLayout from 'layouts/PageLayout'
import PageContainer from 'layouts/PageContainer'
import MainHeader from 'components/MainHeader'

export default function MainPage() {
  return (
    <PageLayout>
      <PageContainer>
        <MainHeader />
        <MainNotice />
      </PageContainer>
    </PageLayout>
  )
}
