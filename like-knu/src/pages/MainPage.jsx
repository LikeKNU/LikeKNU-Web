import MainNotice from 'components/MainNotice'
import React from 'react'
import PageLayout from 'layouts/PageLayout'
import PageContainer from 'layouts/PageContainer'
import MainHeader from 'components/MainHeader'
import MainBus from 'components/MainBus'
import MainMenu from 'components/MainMenu'
import MainCalendar from 'components/MainCalendar'

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
