import { iiSensorCard } from "../models/sensor-card.model";

export const FakeSensorDataList: iiSensorCard[] = [
  {
    id: 1,
    group: "Group03",
    title: "環境設備A1",
    status: 1,
    option: {
      temp: 25.5,
      humidity: 90,
      kw: 2184,
    },
  },
  {
    id: 2,
    group: "Group03",
    title: "環境設備A2",
    status: 0,
    option: {
      temp: 3,
      humidity: 3,
      kw: 4,
    },
  },
  {
    id: 3,
    group: "Group03",
    title: "環境設備A3",
    status: 0,
    option: {
      temp: 25.3,
      humidity: 90,
      kw: 2184,
      par: 159.3,
      lux: 21.4,
      soil: 84,
    },
  },
];
