import React, { useState } from 'react';
import { useNavermaps } from 'react-naver-maps';
import styled from 'styled-components';
import { BackHeader } from '../components/BackHeader';
import MapView from '../components/maps/MapView';
import { Header } from '../components/styles/PageHeader';
import { PAGE_NAME } from '../constants/pageName';
import { PLACES_TYPE } from '../constants/places';
import PageLayout from '../layouts/PageLayout';

const CampusMapPage = () => {
  const navermaps = useNavermaps();
  const [coordinatesList, setCoordinatesList] = useState([
    { latitude: 36.8506431, longitude: 127.150506, type: PLACES_TYPE.BUILDING, name: '8공학관' },
    { latitude: 36.8503428, longitude: 127.149506, type: PLACES_TYPE.LIBRARY, name: '천안도서관' },
    { latitude: 36.8506410, longitude: 127.151498, type: PLACES_TYPE.DORMITORY, name: '챌린지하우스입니다' },
    { latitude: 36.8514410, longitude: 127.152498, type: PLACES_TYPE.CAFETERIA, name: '학생식당' }
  ]);

  return (
    <PageLayout>
      <Header>
        <BackHeader title={PAGE_NAME.CAMPUS_MAP} path={'/'} />
      </Header>
      <Content>
        <MapView navermaps={navermaps} places={coordinatesList} />
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
