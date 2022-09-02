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
      console.log('field: ', field);
      switch (field) {
        case 'arrayOfPos':
          set(routeAtom, (prevState) => ({ ...prevState, [field]: JSON.stringify(newValue) }));
        case 'runningTime':
          typeof newValue === 'string' &&
            set(routeAtom, (prevState) => ({
              ...prevState,
              [field]: `${newValue.substr(0, 2)}:${newValue.substr(3, 4)}`,
            }));
        case 'recommendedTags':
          Array.isArray(newValue) &&
            set(routeAtom, (prevState) => ({
              ...prevState,
              [field]: filterRecTagsTitleToIndex(newValue),
            }));
        case 'secureTags':
          Array.isArray(newValue) &&
            set(routeAtom, (prevState) => ({
              ...prevState,
              [field]: filterSecureTagsTitleToIndex(newValue),
            }));
        default:
          set(routeAtom, (prevState) => ({ ...prevState, [field]: newValue }));
      }
    },
});

export default routeAddRecord;
