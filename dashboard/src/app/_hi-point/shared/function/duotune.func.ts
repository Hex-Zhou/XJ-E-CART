import { tyDuoTune } from "../types/duotune.type";
// https://preview.keenthemes.com/html/metronic/docs/icons/duotune
export function getDuoTune(type: tyDuoTune, num: number) {
  let str = String(num);
  if (num < 10) str = "0" + str;
  if (num < 100) str = "0" + str;
  let typeSubString = type.substring(0, 3);
  typeSubString = typeSubString == "ele" ? "elc" : typeSubString;
  return `./assets/media/icons/duotune/${type}/${typeSubString}${str}.svg`;
}
