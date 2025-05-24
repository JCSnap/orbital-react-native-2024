export type BusStop = {
  name: string;
  busStopId: string;
};

export type BusStopDetails = {
  [key: string]: BusStop[];
};

export type ApiResponse = {
  message: string;
  busStopDetails: BusStopDetails;
};
