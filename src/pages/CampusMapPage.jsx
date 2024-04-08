import React from 'react';
import { useNavermaps } from 'react-naver-maps';
import styled from 'styled-components';
import { BackHeader } from '../components/BackHeader';
import MapView from '../components/maps/MapView';
import { Header } from '../components/styles/PageHeader';
import { PAGE_NAME } from '../constants/pageName';
import PageLayout from '../layouts/PageLayout';

const CampusMapPage = () => {
  const navermaps = useNavermaps();

  return (
    <PageLayout>
      <Header>
        <BackHeader title={PAGE_NAME.CAMPUS_MAP} path={'/'} />
      </Header>
      <Content>
        <MapView navermaps={navermaps} />
      </Content>
    </PageLayout>
  );
};

const Content = styled.div`
  padding-top: 65px;
  width: 100%;
  height: calc(100vh - 65px);
`;

export default CampusMapPage;
