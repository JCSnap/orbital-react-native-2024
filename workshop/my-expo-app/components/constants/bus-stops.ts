const BusStopTimings = [
  {
    id: 1,
    name: 'COM 3',
    busses: [
      { name: 'D1', arriving: ['12', '25'] },
      { name: 'D2', arriving: ['7', '18'] },
    ],
  },
  {
    id: 2,
    name: 'Biz 2',
    busses: [
      { name: 'A2', arriving: ['4', '20'] },
      { name: 'D1', arriving: ['17'] },
    ],
  },
  {
    id: 3,
    name: 'Opp Hon Sui Sen Memorial Library',
    busses: [
      { name: 'D2', arriving: ['9'] },
      { name: 'BTC', arriving: ['28', '37'] },
    ],
  },
  {
    id: 4,
    name: 'Opp TCOMS',
    busses: [
      { name: 'A1', arriving: ['11'] },
      { name: 'D1', arriving: ['22'] },
    ],
  },
  {
    id: 5,
    name: 'TCOMS',
    busses: [{ name: 'D2', arriving: ['16', '31'] }],
  },
  {
    id: 6,
    name: 'Opp NUSS',
    busses: [
      { name: 'D1', arriving: ['14'] },
      { name: 'BTC', arriving: ['27'] },
    ],
  },
  {
    id: 7,
    name: 'Central Library',
    busses: [{ name: 'A2', arriving: ['8', '23'] }],
  },
  {
    id: 8,
    name: 'AS 5',
    busses: [
      { name: 'D1', arriving: ['6'] },
      { name: 'D2', arriving: ['19'] },
    ],
  },
  {
    id: 9,
    name: 'Information Technology',
    busses: [{ name: 'BTC', arriving: ['10'] }],
  },
  {
    id: 10,
    name: 'LT 13',
    busses: [{ name: 'A1', arriving: ['13', '29'] }],
  },
  {
    id: 11,
    name: 'Ventus',
    busses: [
      { name: 'A2', arriving: ['3'] },
      { name: 'D1', arriving: ['26'] },
    ],
  },
  {
    id: 12,
    name: 'University Hall',
    busses: [
      { name: 'D2', arriving: ['21'] },
      { name: 'BTC', arriving: ['30'] },
    ],
  },
];

export default BusStopTimings;
