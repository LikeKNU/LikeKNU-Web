import React, { useEffect, useState } from 'react';
import { useNavermaps } from 'react-naver-maps';
import styled from 'styled-components';
import { BackHeader } from '../components/BackHeader';
import MapView from '../components/maps/MapView';
import PlaceFilter from '../components/maps/PlaceFilter';
import { Header } from '../components/styles/PageHeader';
import { PAGE_NAME } from '../constants/pageName';
import { PLACES_TYPE } from '../constants/places';
import PageLayout from '../layouts/PageLayout';

const CampusMapPage = () => {
  const mockData = [
    { id: 'place_aklewejhf', latitude: 36.8506431, longitude: 127.150506, type: PLACES_TYPE.BUILDING, name: '8공학관' },
    { id: 'place_awefasdf', latitude: 36.8503428, longitude: 127.149506, type: PLACES_TYPE.LIBRARY, name: '천안도서관' },
    { id: 'place_aklsjh34kse', latitude: 36.8506410, longitude: 127.151498, type: PLACES_TYPE.DORMITORY, name: '챌린지하우스입니다' },
    { id: 'place_akljhs34k', latitude: 36.8514410, longitude: 127.152498, type: PLACES_TYPE.CAFETERIA, name: '학생식당' },
    { id: 'place_askljfh4kw5', latitude: 36.8514410, longitude: 127.152488, type: PLACES_TYPE.CAFETERIA, name: '학생식당' }
  ];
  const navermaps = useNavermaps();
  const [filterType, setFilterType] = useState();
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const fetchPlaces = async () => {
    // const response = await getPlaces();
    const response = mockData;
    setPlaces([...response]);
    setFilteredPlaces([...response]);
  };

  useEffect(() => {
    fetchPlaces();
    setFilterType(null);
  }, []);

  useEffect(() => {
    if (filterType === null) {
      setFilteredPlaces(places);
      return;
    }

    setFilteredPlaces(places.filter(place => place.type === filterType));
  }, [filterType]);

  return (
    <PageLayout>
      <Header>
        <BackHeader title={PAGE_NAME.CAMPUS_MAP} path={'/'} />
      </Header>
      <Content>
        <PlaceFilter selectedType={filterType} setSelectedType={setFilterType} />
        {/*<ControllerContainer>
          <PlaceSearchBox />z
        </ControllerContainer>*/}
        <MapView navermaps={navermaps} places={filteredPlaces} />
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
