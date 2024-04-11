import React, { useEffect, useState } from 'react';
import { Container as MapDiv, NaverMap } from 'react-naver-maps';
import { Campus } from '../../constants/campus';
import { getCampus } from '../../utils/DeviceManageUtil';
import CustomMarker from './markers/CustomMarker';
import MarkerIcon from './markers/MarkerIcon';

const MapView = ({ navermaps, places }) => {
  const [map, setMap] = useState(null);
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

  const getBounds = (places) => {
    const latitudes = places.map(place => place.latitude);
    const longitudes = places.map(place => place.longitude);

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
                  ref={setMap}>
          {places.map((place) => (
            <CustomMarker key={place.id} coordinate={place}>
              <MarkerIcon name={place.name} type={place.type} />
            </CustomMarker>
          ))}
        </NaverMap>
      </MapDiv>
    </>
  );
};

export default MapView;
