import { atom } from 'recoil';

const locationAtom = atom({
  key: 'locationAtom',
  default: { latitude: 37.57986, longitude: 126.97711 },
});

export default locationAtom;
