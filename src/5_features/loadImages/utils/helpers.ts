import { DELETE_COUNT_IMAGES } from '../types/constants';

export const filterImages = <T>(images: Array<T>, index: number): Array<T> => {
  const arrayImageCopy = [...images];
  arrayImageCopy.splice(index, DELETE_COUNT_IMAGES);
  return arrayImageCopy;
};
