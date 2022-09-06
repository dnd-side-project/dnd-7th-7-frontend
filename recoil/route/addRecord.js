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
        // case 'arrayOfPos':
        //   set(routeAtom, (prevState) => ({ ...prevState, [field]: JSON.stringify(newValue) }));
        //   break;
        case 'runningTime':
          typeof newValue === 'string' &&
            set(routeAtom, (prevState) => ({
              ...prevState,
              [field]: `${
                newValue.substr(0, 1).length < 2
                  ? '0' + newValue.substr(0, 1)
                  : newValue.substr(0, 1)
              }:${newValue.substr(2, 3)}`,
            }));
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
