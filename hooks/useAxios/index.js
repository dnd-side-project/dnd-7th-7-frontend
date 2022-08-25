import axios from 'axios';
import getEnvVars from '../../environment';

const { baseUrl } = getEnvVars();

const Axios = axios.create({
  headers: {
    Accept: 'application/json',
    useQueryString: 'true',
  },
  baseURL: baseUrl,
  timeout: 2000,
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
    console.log('data: ', data);
    return data;
  } catch (error) {
    if (error.response) {
      console.log('요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.');
      console.log('error.response.data: ', error.response.data);
      console.log('error.response.status: ', error.response.status);
      console.log('error.response.headers: ', error.response.headers);
    } else if (error.request) {
      console.log('요청이 전송되었지만, 응답이 수신되지 않았습니다.');
      console.log('error.request: ', error.request);
    } else {
      console.log('오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.');
      console.log('error.message: ', error.message);
    }
  }
};

export { getRecommendedRoutes, getMainRouteById, Axios };
