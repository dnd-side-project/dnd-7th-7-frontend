import axios from 'axios';
import getEnvVars from '../../environment';

const { baseUrl } = getEnvVars();

const Axios = axios.create({
  headers: {
    Accept: 'application/json',
    useQueryString: 'true',
  },
  baseURL: baseUrl,
});

/**
내 위치에 따라 근처 경로들 불러오기
 * @param {number} latitude 
 * @param {number} longitude 
 */
const getRecommendedRoutes = async (latitude = 37.517235, longitude = 127.047325) => {
  try {
    const { data } = await Axios.get(`running-route/recommendedRoute`, {
      params: {
        latitude,
        longitude,
      },
    });
    return data;
  } catch (error) {
    console.log('getRecommendedRoutes API error', error);
  }
};

/**
특정 경로_main
 * @param {number} id 
 */
const getMainRouteById = async (id = 1) => {
  try {
    const { data } = await Axios.get(`running-route/main/${id}`);
    return data;
  } catch (error) {
    console.log('getMainRouteById API error', error);
  }
};

/**
경로 등록 api (추천 경로 등록 & 따라가기 등록)
 * @param {formData} formData 
 */
const postMainRoute = async (formData) => {
  try {
    const { data } = await Axios.post(`running-route`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  } catch (error) {
    console.log('postRoute API error', error);
  }
};

export { getRecommendedRoutes, getMainRouteById, postMainRoute };
