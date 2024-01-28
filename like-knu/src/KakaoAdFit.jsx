import { useEffect, useRef } from 'react';

function KakaoAdFit({ unit, width, height, disabled, style }) {
  const scriptElementWrapper = useRef(null);

  useEffect(() => {
    if (!disabled) {
      const script = document.createElement('script');
      script.setAttribute('src', 'https://t1.daumcdn.net/kas/static/ba.min.js');
      scriptElementWrapper.current.appendChild(script);

      return () => {
        const mainBannerAdFit = window.adfit;
        if (mainBannerAdFit) mainBannerAdFit.destroy(unit);
      }
    }
  }, [])

  return <div style={style} ref={scriptElementWrapper}>
    <ins className="kakao_ad_area" style={{ display: 'none' }}
         data-ad-unit={unit}
         data-ad-width={width}
         data-ad-height={height}></ins>
  </div>
}

export default KakaoAdFit;
