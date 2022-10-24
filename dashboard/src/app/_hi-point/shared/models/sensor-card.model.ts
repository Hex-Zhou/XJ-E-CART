// 暫時使用要刪掉
export interface iiSensorCard {
  id: number;
  title: string;
  group?: string;
  status: 1 | 0;
  option?: {
    temp?: number;
    humidity?: number;
    kw?: number;
    par?: number;
    lux?: number;
    soil?: number;
  };
}
