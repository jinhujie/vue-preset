const { VUE_APP_MOBILE } = process.env;

export function deviceIsMobile (): boolean {
  return !!VUE_APP_MOBILE;
}

export function generateClassWithDevice (className: string): string{
  if (deviceIsMobile()) {
    return className + '_m'
  }
  return className;
}