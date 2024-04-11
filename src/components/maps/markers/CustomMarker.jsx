import { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Overlay, useNavermaps } from 'react-naver-maps';

const CustomMarker = ({ coordinates, anchor = { x: 0, y: 0 }, children }) => {
  console.log('anchor: ', anchor);

  const navermaps = useNavermaps();
  const componentHTML = ReactDOMServer.renderToString(children);

  const [marker] = useState(() => {
    return new navermaps.Marker({
      position: { lat: coordinates.latitude, lng: coordinates.longitude },
      icon: {
        content: `${componentHTML}`,
        anchor: new navermaps.Point(anchor.x, anchor.y),
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
