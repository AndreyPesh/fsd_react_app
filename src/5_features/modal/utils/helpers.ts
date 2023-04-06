export const selectClassesModal = (isShow: boolean) => {
  if (isShow) {
    return ['modal', 'show'];
  }
  return ['modal', 'close'];
};
