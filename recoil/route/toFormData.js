import { selector } from 'recoil';
import routeAtom from './atom';

const toFormData = selector({
  key: 'toFormData',
  get: ({ get }) => {
    const fd = new FormData();
    const routeInfo = get(routeAtom);
    for (let key in routeInfo) {
      console.log(key, routeInfo[key]);
      fd.append(key, routeInfo[key]);
    }
    console.log('fd: ', fd);
    return fd;
  },
});

export default toFormData;
