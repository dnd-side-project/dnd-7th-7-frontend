import React from 'react';
import { useQuery } from 'react-query';
import searchRoutes from '@apis/searchRoutes';

const useSearchRoutes = (coords) => {
  return useQuery(['route', coords], ({ queryKey }) =>
    searchRoutes(queryKey[1].lat, queryKey[1].lng),
  );
};

export default useSearchRoutes;
