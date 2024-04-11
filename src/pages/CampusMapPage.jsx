import React, { useEffect, useState } from 'react';
import { useNavermaps } from 'react-naver-maps';
import styled from 'styled-components';
import { BackHeader } from '../components/BackHeader';
import MapView from '../components/maps/MapView';
import MyLocationButton from '../components/maps/markers/MyLocationButton';
import PlaceFilter from '../components/maps/PlaceFilter';
import { placesMockData } from '../components/maps/placesMockData';
import { Header } from '../components/styles/PageHeader';
import { PAGE_NAME } from '../constants/pageName';
import PageLayout from '../layouts/PageLayout';

const CampusMapPage = () => {
  const navermaps = useNavermaps();
  const [filterType, setFilterType] = useState();
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [isMyLocation, setIsMyLocation] = useState(false);

  useEffect(() => {
    if (filterType === null) {
      setFilteredPlaces(places);
      return;
    }

    setFilteredPlaces(places.filter(place => place.type === filterType));
  }, [filterType]);

  useEffect(() => {
    fetchPlaces();
    setFilterType(null);
  }, []);

  const fetchPlaces = async () => {
    // const response = await getPlaces();
    const response = placesMockData;
    setPlaces([...response]);
    setFilteredPlaces([...response]);
  };

  const changeIsMyLocation = () => {
    console.log('changeIsMyLocation');
    setIsMyLocation((prevState) => !prevState);
  };

  return (
    <PageLayout>
      <Header>
        <BackHeader title={PAGE_NAME.CAMPUS_MAP} path={'/'} />
      </Header>
      <Content>
        <PlaceFilter selectedType={filterType} setSelectedType={setFilterType} />
        <MyLocationButton handleOnClick={changeIsMyLocation} isMyLocation={isMyLocation} />
        {/*<ControllerContainer>
          <PlaceSearchBox />
        </ControllerContainer>*/}
        <MapView navermaps={navermaps} places={filteredPlaces} isMyLocation={isMyLocation} />
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
