import { BASE_URL } from '1_app/constants';

export const createRoutePage = (route: string, parameter: string) => {
  return route + '/' + parameter;
};

export const createUrlImage = (name: string) => {
  return `${BASE_URL}/${name}`;
};

function generateNameImage(extension: string) {
  const maxIndexId = 5000;
  const minIndexId = 1;
  const time = Date.now().toString();
  const randomId = Math.random() * (maxIndexId - minIndexId) + minIndexId;
  return `${randomId}_${time}.${extension}`;
}

export function dataURLtoFile(dataUrl: string) {
  const data = dataUrl.split(',');
  const dataAboutFile = data[0].split(';')[0].split('/');
  const extension = dataAboutFile.pop() as string;
  const filename = generateNameImage(extension);

  const mimeType = data[0].match(/:(.*?);/)![1];
  const baseStr = window.atob(data[1]);
  let counter = baseStr.length;
  let u8array = new Uint8Array(counter);

  while (counter--) {
    u8array[counter] = baseStr.charCodeAt(counter);
  }

  return new File([u8array], filename, { type: mimeType });
}
