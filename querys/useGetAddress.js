import React from 'react';
import { useQuery } from 'react-query';
import getAddress from '../apis/getAddress';

const useGetAddress = (coords) => {
  return useQuery(['address', coords], ({ queryKey }) => getAddress(queryKey[1]));
};

export default useGetAddress;
