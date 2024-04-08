import { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Overlay, useNavermaps } from 'react-naver-maps';

const CustomMarker = ({ coordinate: coordinates, handleOnClick, children }) => {
  const navermaps = useNavermaps();
  const componentHTML = ReactDOMServer.renderToString(children);

  const [marker] = useState(() => {
    return new navermaps.Marker({
      position: { lat: coordinates.latitude, lng: coordinates.longitude },
      icon: {
        content: `${componentHTML}`,
        /*url: 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/map-marker-icon.png',
        scaledSize: new navermaps.Size(50, 50),*/
      }
    });
  });

  return (
    <>
      <Overlay element={marker} />
    </>
  );
};

export default CustomMarker;
