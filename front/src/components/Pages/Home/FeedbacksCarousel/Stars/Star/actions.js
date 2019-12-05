export const getStarClass = value => {
  switch (value) {
    case 0:
      return 'far fa-star';
    default:
      return 'fas fa-star';
  }
}
