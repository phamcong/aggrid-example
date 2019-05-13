const rowData = []
Array.from(Array(1000).keys()).map(ele => rowData.push({
  name: Math.random().toString(36).substring(7).toUpperCase(),
  sedolCode: Math.random().toString(36).substring(7).toUpperCase(),
  isinCode: Math.random().toString(36).substring(7).toUpperCase(),
  sectorName: Math.random().toString(36).substring(7).toUpperCase(),
  sectorGroup: Math.random().toString(36).substring(7).toUpperCase(),
  cur: ['USD', 'EUR', 'JYP'][Math.round(Math.random() * 3)],
  size: ['L', 'M', 'S'][Math.round(Math.random() * 3)],
  country: ['France', 'Japan', 'United State'][Math.round(Math.random() * 3)],
  info: '',
  localPrice: (Math.random() * 500).toFixed(2),
  pricePfCurrency: '',
  totalNbOfShares: Math.round(Math.random() * 10000),
  fifFactorAdjust: Math.round(Math.random() * 100).toFixed(2),
  weight: Math.random().toFixed(2)
}));

export {
  rowData
};




