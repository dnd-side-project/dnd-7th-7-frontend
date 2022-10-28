import React from 'react';
import { useQuery } from 'react-query';
import getAddress from '../apis/getAddress';
import getRoute from '../apis/getRoute';

const useGetRoute = (id, isMain) => {
  return useQuery(['route', id, isMain], ({ queryKey }) => getRoute(queryKey[1], queryKey[2]));
};

export default useGetRoute;
