import { NAME_CLASS_ACTIVE_BURGER } from "./constants";

export const addRemoveClassToBody = (state: boolean) => {
  if (!state) {
    document.body.classList.add(NAME_CLASS_ACTIVE_BURGER);
  } else {
    document.body.classList.remove(NAME_CLASS_ACTIVE_BURGER);
  }
};
