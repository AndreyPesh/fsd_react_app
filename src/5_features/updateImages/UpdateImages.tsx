import axios from 'axios';
import {
  useEffect,
  useRef,
  MouseEvent,
  ChangeEvent,
} from 'react';
import { UpdateImagesProps } from './types/interfaces';
import { BASE_URL } from '1_app/constants';
import { filterImages } from '5_features/loadImages/utils/helpers';
import ImagePreview from '5_features/loadImages/ui/ImagePreview';

const UpdateImages = ({ imagesList, updatedImages, setUpdatedImages }: UpdateImagesProps) => {
  const refInput = useRef<HTMLInputElement>(null);

  const btnAddHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    refInput.current?.click();
  };

  const fileHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      const arrayFiles = Array.from(files);
      arrayFiles.map((file) => loadFile(file));
    }
    if (refInput.current) refInput.current.value = '';
  };

  const loadFile = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: ProgressEvent<FileReader>) => {
      const { target } = event;
      if (target && target.result && typeof target.result === 'string') {
        const fileBlob = target.result;
        setUpdatedImages((prevState) => [...prevState, fileBlob]);
      }
    };
  };

  const removeImage = (index: number) => {
    setUpdatedImages((prevState) => filterImages(prevState, index));
  };

  useEffect(() => {
    const loadImage = () => {
      imagesList.map(async (imageData) => {
        const { data } = await axios.get(BASE_URL + '/' + imageData.name, {
          responseType: 'blob',
        });
        const reader = new FileReader();
        reader.readAsDataURL(data);

        reader.onload = () => {
          const { result } = reader;
          if (result && typeof result === 'string') {
            setUpdatedImages((prevState) => [...prevState, result]);
          }
        };
      });
    };
    loadImage();
  }, []);

  return (
    <div className="loader-image">
      <div className="loader-image__preview">
        {updatedImages &&
          updatedImages.map((file, index) => (
            <ImagePreview key={index} file={file} remove={() => removeImage(index)} />
          ))}
      </div>
      <div className="">
        <input
          ref={refInput}
          type="file"
          className="loader-image__input"
          onChange={fileHandler}
          multiple
        />
      </div>
      <div>
        <button
          className="button button_confirm"
          type="button"
          data-notclose
          onClick={btnAddHandler}
        >
          Add image
        </button>
      </div>
    </div>
  );
};

export default UpdateImages;
