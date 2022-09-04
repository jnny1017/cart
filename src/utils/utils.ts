const comma = (num: number | string | null): string | null => {
  if (num === null) {
    return null;
  }
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ',');
};

export default comma;
