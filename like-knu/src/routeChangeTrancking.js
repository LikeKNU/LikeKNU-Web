import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import ReactGA from "react-ga4";

export const routeChangeTracking = () => {
  let location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (process.env.REACT_APP_GA_TRACKING_ID) {
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.set({page: location.pathname})
      ReactGA.send("pageview");
    }
  }, [initialized, location]);
};