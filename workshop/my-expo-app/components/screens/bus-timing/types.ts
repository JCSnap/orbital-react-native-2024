export type BusStop = {
  id: number;
  name: string;
  busses: { name: string; arriving: string[] }[];
};

export type AnotherType = {
  property1: string;
  property2: string;
};
