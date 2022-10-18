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
    const data = response.data.results[0].formatted_address;
    const split = data.split(' ');

    // for (const i in split) {
    //   console.log('split', split[i]);
    //   if (i === 1) console.log(split[i]);
    //   else if (i === 2) console.log(split[i]);
    //   else if (i === 3) console.log(split[i]);
    // }
    return data;
  },
});

export default locationToAdress;
