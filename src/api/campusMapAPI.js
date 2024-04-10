import { CampusEng } from '../constants/campus';
import { getCampus } from '../utils/DeviceManageUtil';
import instance from './api';
import { extractBodyFromResponse } from './apiUtility';

const baseURI = '/api/places';

export const getPlaces = async () => {
  const campus = CampusEng[getCampus()];
  const { data } = await instance.get(`${baseURI}`, {
    params: {
      campus: campus
    }
  });
  return extractBodyFromResponse(data);
};
