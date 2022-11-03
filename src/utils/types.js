const SEGMENT = {
  E: '대형',
  D: '중형',
  C: '소형',
  SUV: 'SUV'
};

const FUEL_TYPE = {
  gasoline: '가솔린',
  ev: '전기',
  hybrid: '하이브리드'
};

const segmentKeys = Object.keys(SEGMENT);
const segmentValues = Object.values(SEGMENT);

const fuelTypeKeys = Object.keys(FUEL_TYPE);
const fuelTypeValues = Object.values(FUEL_TYPE);

export {
  SEGMENT,
  FUEL_TYPE,
  segmentKeys,
  segmentValues,
  fuelTypeKeys,
  fuelTypeValues
};
