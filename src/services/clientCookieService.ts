export default class ClientCookieService {
  private static setCookie(name: string, value: string) {
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/`;
  }

  static setLinearScheduleView(value: boolean) {
    this.setCookie('linearScheduleView', value.toString());
  }

  static setScheduleHighlightName(value: string) {
    this.setCookie('scheduleHighlightName', value);
  }
}
