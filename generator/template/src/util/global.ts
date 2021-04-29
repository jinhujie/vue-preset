export function getServiceBaseUrl(): string {
  return process.env.VUE_APP_API;
}

export function serverRunningLocally(): boolean {
  return !!process.env.VUE_APP_LOCAL;
}

window.addEventListener('unhandledrejection', function (event) {
  console.log('unhandledrejection', event);
  event.preventDefault();
});