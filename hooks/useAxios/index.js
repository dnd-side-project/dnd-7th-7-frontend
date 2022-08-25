import axios from 'axios';
import getEnvVars from '../../environment';
const { baseURL } = getEnvVars();

/**
내 위치에 따라 근처 경로들 불러오기
 * @param {number} latitude 
 * @param {number} longitude 
 */
const getRecommendedRoutes = async (latitude = 37.517235, longitude = 127.047325) => {
  try {
    const { data } = await axios.get(`${baseURL}running-route/recommendedRoute`, {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      params: {
        latitude,
        longitude,
      },
    });
    console.log(data);
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
    const { data } = await axios.get(`${baseURL}running-route/main/${id}`, {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(data);
  } catch (error) {
    console.log('getMainRouteById API error', error);
  }
};

export { getRecommendedRoutes, getMainRouteById };
