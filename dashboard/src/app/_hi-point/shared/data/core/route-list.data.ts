import { SVGEnum } from "../../enum/svg.enum";
// https://preview.keenthemes.com/html/metronic/docs/icons/duotune
import { iiRouteList } from "../../models/core/route-list.model";
import { RoutePathEnum } from "../../enum/route-path.enum";
import { getDuoTune } from "../../function/duotune.func";
const route = RoutePathEnum;
export const RoutesList: iiRouteList[] = [
 {
  title: "首頁",
  link: route.home,
  root: true,
  icon: getDuoTune("abstract", 25),
 },
 { title: "控制設定", link: route.controlSetting, root: true, icon: getDuoTune("abstract", 20) },
 { title: "影像資料", link: route.imageData, root: true, icon: getDuoTune("general", 6) },
 { title: "歷史資料", link: route.historyData, root: true, icon: SVGEnum.duoHistory },
 {
  title: "帳號管理",
  link: route.accountManagement,
  root: true,
  icon: getDuoTune("communication", 13),
 },
 { title: "故障履歷紀錄", link: route.errReport, root: true, icon: getDuoTune("files", 12) },
 { title: "幫助", link: route.help, root: true, icon: getDuoTune("general", 46) },
 { title: "代理商管理", link: route.agent, root: true, icon: getDuoTune("general", 1) },
 { title: "群組設定", root: false, link: route.groupSetting, hidden: true },
];
