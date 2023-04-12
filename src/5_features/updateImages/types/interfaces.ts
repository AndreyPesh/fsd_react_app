import { Dispatch, SetStateAction } from 'react';

export interface ImageData {
  id: string;
  name: string;
}

export interface UpdateImagesProps {
  imagesList: ImageData[];
  setUpdatedImages: Dispatch<SetStateAction<string[]>>;
  updatedImages: Array<string>;
}
