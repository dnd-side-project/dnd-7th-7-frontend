import { selector } from 'recoil';
import locationAtom from './atom';
import getEnvVars from '@/environment';
import axios from 'axios';

const { GOOGLE_MAP_API_KEY } = getEnvVars();

const locationToAdress = selector({
  key: 'locationToAdress',
  get: async ({ get }) => {
    const coords = get(locationAtom);
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.latitude},${coords.longitude}&language=ko&key=${GOOGLE_MAP_API_KEY}`,
    );

    if (response.results) return response;
    else return null;
  },
});

export default locationToAdress;
