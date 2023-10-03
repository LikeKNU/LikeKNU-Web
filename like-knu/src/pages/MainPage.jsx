import MainNotice from 'components/main/MainNotice'
import React from 'react'
import PageLayout from 'layouts/PageLayout'
import PageContainer from 'layouts/PageContainer'
import MainHeader from 'components/main/MainHeader'
import MainBus from 'components/main/MainBus'
import MainMenu from 'components/main/MainMenu'
import MainCalendar from 'components/main/MainCalendar'
import styled from 'styled-components'
import colors from 'constants/colors'

export default function MainPage() {
  return (
    <PageLayout>
      <MainHeader />
      <StyledPageContainer>
        <MainNotice />
        <MainBus />
        <MainMenu />
        <MainCalendar />
      </StyledPageContainer>
    </PageLayout>
  )
}

const StyledPageContainer = styled(PageContainer)`
  background-color: ${colors.gray50};
  padding-top: 74px;
  padding-bottom: 90px;

  grid-template-rows: minmax(100px, auto);
  grid-template-columns: 1fr 1fr;

  grid-column-gap: 14px;
  grid-row-gap: 12px;
`