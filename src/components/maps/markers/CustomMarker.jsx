import { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Overlay, useNavermaps } from 'react-naver-maps';

const CustomMarker = ({ coordinate: coordinates, children }) => {
  const navermaps = useNavermaps();
  const componentHTML = ReactDOMServer.renderToString(children);

  const [marker] = useState(() => {
    return new navermaps.Marker({
      position: { lat: coordinates.latitude, lng: coordinates.longitude },
      icon: {
        content: `${componentHTML}`
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
