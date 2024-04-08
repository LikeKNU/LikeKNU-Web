import React from 'react';
import { Container as MapDiv, NaverMap } from 'react-naver-maps';
import { Campus } from '../../constants/campus';
import { getCampus } from '../../utils/DeviceManageUtil';

const MapView = ({ navermaps }) => {
  const campus = getCampus();

  const getCampusCenterCoordinates = (campus) => {
    switch (campus) {
      case Campus.SINGWAN:
        return { latitude: 36.4691, longitude: 127.1404 };
      case Campus.CHEONAN:
        return { latitude: 36.8511, longitude: 127.1511 };
      case Campus.YESAN:
        return { latitude: 36.6694, longitude: 126.8604 };
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
                minZoom={getCampusZoom(campus)}>
        {/*<CustomMarker coordinate={centerCoordinates}>
          <div>asdf</div>
        </CustomMarker>*/}
      </NaverMap>
    </MapDiv>
  );
};

export default MapView;
