import { BASE_URL } from "1_app/constants";

export const createRoutePage = (route: string, parameter: string) => {
  return route + '/' + parameter;
};

export const createUrlImage = (name: string) => {
  return `${BASE_URL}/${name}`;
};
