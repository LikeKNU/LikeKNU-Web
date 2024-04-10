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
    { id: 0, latitude: 36.85021614427549, longitude: 127.149477854809, type: PLACES_TYPE.BUILDING, name: '1공학관' },
    { id: 1, latitude: 36.8497981000429, longitude: 127.151152999602, type: PLACES_TYPE.BUILDING, name: '2공학관' },
    { id: 2, latitude: 36.849792000293505, longitude: 127.15000889982, type: PLACES_TYPE.BUILDING, name: '3공학관' },
    { id: 3, latitude: 36.850079600095405, longitude: 127.149098699726, type: PLACES_TYPE.BUILDING, name: '4공학관' },
    { id: 4, latitude: 36.8510404003102, longitude: 127.149012500099, type: PLACES_TYPE.BUILDING, name: '5공학관' },
    { id: 5, latitude: 36.8509836003795, longitude: 127.15184539990801, type: PLACES_TYPE.BUILDING, name: '6공학관' },
    { id: 6, latitude: 36.85087370017181, longitude: 127.148224999724, type: PLACES_TYPE.BUILDING, name: '7공학관' },
    { id: 7, latitude: 36.852266622543695, longitude: 127.15034721235001, type: PLACES_TYPE.BUILDING, name: '8공학관' },
    { id: 8, latitude: 36.85218805367211, longitude: 127.150882944483, type: PLACES_TYPE.BUILDING, name: '9공학관' },
    { id: 9, latitude: 36.85108740006701, longitude: 127.15317580011101, type: PLACES_TYPE.BUILDING, name: '10공학관' },

    { id: 10, latitude: 36.85098570001621, longitude: 127.15093309960399, type: PLACES_TYPE.LIBRARY, name: '도서관' },

    { id: 11, latitude: 36.8513620003628, longitude: 127.14881390017702, type: PLACES_TYPE.DORMITORY, name: '챌린지하우스' },
    { id: 12, latitude: 36.8516212003247, longitude: 127.149553500196, type: PLACES_TYPE.DORMITORY, name: '용주학사' },
    { id: 13, latitude: 36.852207928133794, longitude: 127.149625554367, type: PLACES_TYPE.DORMITORY, name: '도솔학사(BTL)' },

    { id: 14, latitude: 36.850798900000264, longitude: 127.1502713000004, type: PLACES_TYPE.CAFETERIA, name: '학생•직원식당' },
    { id: 15, latitude: 36.85135590000027, longitude: 127.14894250000012, type: PLACES_TYPE.CAFETERIA, name: '생활관식당' },

    { id: 16, latitude: 36.85046063190917, longitude: 127.14831497762587, type: PLACES_TYPE.BUILDING, name: '산학협력관' },
    { id: 17, latitude: 36.851437100214596, longitude: 127.15230989986598, type: PLACES_TYPE.BUILDING, name: '용주체육관' },
    { id: 18, latitude: 36.8502236917402, longitude: 127.151139693653, type: PLACES_TYPE.BUILDING, name: '연구관' },
    { id: 19, latitude: 36.85086280000012, longitude: 127.1519646000003, type: PLACES_TYPE.LIBRARY, name: '서점' },

    { id: 20, latitude: 36.8506448381161, longitude: 127.15044103917615, type: PLACES_TYPE.CONVENIENCE, name: 'CU 편의점' },
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
