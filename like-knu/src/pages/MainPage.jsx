import MainNotice from 'components/main/MainNotice'
import React from 'react'
import PageLayout from 'layouts/PageLayout'
import PageContainer from 'layouts/PageContainer'
import MainHeader from 'components/main/MainHeader'
import MainBus from 'components/main/MainBus'
import MainMenu from 'components/main/MainMenu'
import MainCalendar from 'components/main/MainCalendar'

export default function MainPage() {
  return (
    <PageLayout>
      <MainHeader />
      <PageContainer>
        <MainNotice />
        <MainBus />
        <MainMenu />
        <MainCalendar />
      </PageContainer>
    </PageLayout>
  )
}
