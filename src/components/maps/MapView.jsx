import React from 'react';
import { Container as MapDiv, NaverMap } from 'react-naver-maps';
import { Campus } from '../../constants/campus';
import { getCampus } from '../../utils/DeviceManageUtil';
import CustomMarker from './markers/CustomMarker';
import MarkerIcon from './markers/MarkerIcon';

const MapView = ({ navermaps, places }) => {
  const campus = getCampus();

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

  const centerCoordinates = getCampusCenterCoordinates(campus);

  return (
    <MapDiv style={{ width: '100%', height: '100%' }}>
      <NaverMap defaultCenter={new navermaps.LatLng(centerCoordinates.latitude, centerCoordinates.longitude)}
                defaultZoom={getCampusZoom(campus)}
                minZoom={getCampusZoom(campus) - 1}>
        {places.map((place, index) => (
          <CustomMarker key={index} coordinate={place}>
            <MarkerIcon type={place.type} />
          </CustomMarker>
        ))}
      </NaverMap>
    </MapDiv>
  );
};

export default MapView;
