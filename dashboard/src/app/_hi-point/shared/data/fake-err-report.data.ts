import { iiErrorReport } from "../models/err-report.model";

export const FakeErrorReportData: iiErrorReport[] = [
 {
  content: "溫度過高",
  group: "Group02",
  isOff: false,
  name: "設備名稱",
  nickname: "設備小名",
  time: "2021/7/27 11:20:15",
 },
 {
  content: "光照不足",
  group: "Group05",
  isOff: true,
  name: "",
  nickname: "光照不足",
  time: "2021/3/5 11:27:58",
 },
 {
  content: "電源異常",
  group: "Group87",
  isOff: false,
  name: "設備名稱2",
  nickname: "設備小名2",
  time: "2022/7/27 07:13:11",
 },
];
