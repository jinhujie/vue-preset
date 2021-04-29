import { serverRunningLocally } from '@/util/global'
const { VUE_APP_MOBILE } = process.env;

export function deviceIsMobile(): boolean {
  if (serverRunningLocally()) {
    const hackMobile = false;
    return hackMobile;
  }
  return !!VUE_APP_MOBILE;
}

export function generateClassWithDevice(className: string): string {
  let commonClass = className;
  let mobileClass = className + "_mo"
  let pcClass = className + "_pc";
  if (deviceIsMobile()) {
    return commonClass + ' ' + mobileClass;
  }
  return commonClass + ' ' + pcClass;
}
