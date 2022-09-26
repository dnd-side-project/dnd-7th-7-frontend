import { selectorFamily } from 'recoil';
import routeAtom from './atom';
import { filterRecTagsTitleToIndex, filterSecureTagsTitleToIndex } from '@hooks/utils.js';

const routeAddRecord = selectorFamily({
  key: 'routeAddRecord',
  get:
    (field) =>
    ({ get }) =>
      get(routeAtom)[field],
  set:
    (field) =>
    ({ set }, newValue) => {
      switch (field) {
        case 'arrayOfPos':
          const temp = [];
          Object.entries(newValue).forEach(([key, value]) =>
            temp.push({
              latitude: value.latitude.toString(),
              longitude: value.longitude.toString(),
            }),
          );
          set(routeAtom, (prevState) => ({ ...prevState, [field]: temp }));
          break;
        case 'recommendedTags':
          Array.isArray(newValue) &&
            set(routeAtom, (prevState) => ({
              ...prevState,
              [field]: filterRecTagsTitleToIndex(newValue),
            }));
          break;
        case 'secureTags':
          Array.isArray(newValue) &&
            set(routeAtom, (prevState) => ({
              ...prevState,
              [field]: filterSecureTagsTitleToIndex(newValue),
            }));
          break;
        default:
          set(routeAtom, (prevState) => ({ ...prevState, [field]: newValue }));
          break;
      }
    },
});

export default routeAddRecord;
