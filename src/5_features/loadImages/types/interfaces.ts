import { Dispatch, SetStateAction } from 'react';

export interface LoadImagesProps {
  setImagesToState: Dispatch<SetStateAction<Array<string>>>;
  images: Array<string>;
}
