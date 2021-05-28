export const shadows = (num) => {
  switch (num) {
    case 1:
      return `box-shadow: 0px 1px 2px rgba(42, 41, 87, 0.05)`;
    default:
      return `box-shadow: none`;
  }
};
