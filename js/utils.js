export const renderActiveItem = (index, activeIndex) => {
  let bgColor = '#F2F2F2',
    foreColor = '#969DA5';
  if (activeIndex === index) {
    bgColor = '#1D1D1F';
    foreColor = '#fff';
  }
  return {
    bgColor,
    foreColor,
  };
};

export const renderIconColor = (index, activeIndex) => {
  let bgColor = '#969DA5',
    foreColor = '#F2F2F2';
  if (activeIndex === index) {
    bgColor = '#ffffff';
    foreColor = '#1D1D1F';
  }

  return {
    bgColor,
    foreColor,
  };
};