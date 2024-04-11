import React, { useEffect, useState } from 'react';
import { Container as MapDiv, NaverMap } from 'react-naver-maps';
import styled from 'styled-components';
import { ReactComponent as MyLocationMarker } from '../../assets/icon/my-location-marker.svg';
import { Campus } from '../../constants/campus';
import { getCampus } from '../../utils/DeviceManageUtil';
import CustomMarker from './markers/CustomMarker';
import MarkerIcon from './markers/MarkerIcon';

const MapView = ({ navermaps, places, isMyLocation, setIsMyLocation }) => {
  const [map, setMap] = useState(null);
  const [myLocation, setMyLocation] = useState();
  const [isRenderMyLocation, setIsRenderMyLocation] = useState(false);
  const campus = getCampus();

  useEffect(() => {
    if (map) {
      const { minLatitude, maxLatitude, minLongitude, maxLongitude } = getBounds(places);
      map.panToBounds(
        new navermaps.LatLngBounds(
          new navermaps.LatLng(minLatitude, minLongitude),
          new navermaps.LatLng(maxLatitude, maxLongitude)
        )
      );
    }
  }, [places]);

  useEffect(() => {
    if (isMyLocation && isRenderMyLocation && myLocation) {
      map.setCenter(new navermaps.LatLng(myLocation.latitude, myLocation.longitude));
      setIsMyLocation(true);
    }

    if (isMyLocation && !isRenderMyLocation) {
      navigator.geolocation.watchPosition(position => {
        setIsRenderMyLocation(true);
        setMyLocation(position.coords);
      });
    }
  }, [isMyLocation]);

  useEffect(() => {
    if (map && isMyLocation) {
      map.setCenter(new navermaps.LatLng(myLocation.latitude, myLocation.longitude));
      navermaps.Event.addListener(map, 'bounds_changed', () => setIsMyLocation(false));
      setIsMyLocation(true);
    }
  }, [myLocation]);

  const getBounds = (places) => {
    const latitudes = places.map(place => place.coordinates.latitude);
    const longitudes = places.map(place => place.coordinates.longitude);

    const margin = 0.001;
    const minLatitude = Math.min(...latitudes) - margin;
    const maxLatitude = Math.max(...latitudes) + margin;
    const minLongitude = Math.min(...longitudes) - margin;
    const maxLongitude = Math.max(...longitudes) + margin;

    return {
      minLatitude,
      maxLatitude,
      minLongitude,
      maxLongitude
    };
  };

  const getCampusCenterCoordinates = (campus) => {
    switch (campus) {
      case Campus.SINGWAN:
        return { latitude: 36.4702096, longitude: 127.140998 };
      case Campus.CHEONAN:
        return { latitude: 36.8506431, longitude: 127.150501 };
      case Campus.YESAN:
        return { latitude: 36.670987, longitude: 126.859612 };
    }
  };

  const getCampusZoom = (campus) => {
    switch (campus) {
      case Campus.SINGWAN:
        return 17;
      case Campus.CHEONAN:
        return 17;
      case Campus.YESAN:
        return 16;
    }
  };

  const centerCoordinates = getCampusCenterCoordinates(Campus.CHEONAN);

  return (
    <>
      <MapDiv style={{ width: '100%', height: '100%' }}>
        <NaverMap defaultCenter={new navermaps.LatLng(centerCoordinates.latitude, centerCoordinates.longitude)}
                  defaultZoom={getCampusZoom(campus)}
                  minZoom={getCampusZoom(campus) - 1}
                  disableKineticPan={false}
                  ref={setMap}>
          {places.map((place) => (
            <CustomMarker key={place.id} coordinates={place.coordinates}>
              <MarkerIcon name={place.name} type={place.type} />
            </CustomMarker>
          ))}
          {isRenderMyLocation && myLocation && (
            <CustomMarker coordinates={myLocation} anchor={{ x: 40, y: 40 }}>
              <StyledMyLocationMarker />
            </CustomMarker>
          )}
        </NaverMap>
      </MapDiv>
    </>
  );
};

export default MapView;

const StyledMyLocationMarker = styled(MyLocationMarker)`
  align-items: center;
  justify-content: center;
`;
