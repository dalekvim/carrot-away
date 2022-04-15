import jwtDecode from "jwt-decode";
import { makeAutoObservable } from "mobx";

export class AuthStore {
  accessToken = "";

  constructor() {
    makeAutoObservable(this);
  }

  setAccessToken(newAccessToken: string) {
    this.accessToken = newAccessToken;
  }

  getHasExpired(): boolean {
    if (!this.accessToken) return true;

    if (this.getTimeTilExpire() > 0) {
      return false;
    } else {
      this.setAccessToken("");
      return true;
    }
  }

  getTimeTilExpire(): number {
    try {
      const { exp } = jwtDecode<{ exp: number }>(this.accessToken);
      const timeTilExpire = Math.floor(exp - Date.now() / 1000); // Returns time in seconds.
      if (timeTilExpire < 0) {
        this.setAccessToken("");
        return -1;
      }
      return timeTilExpire;
    } catch {
      return -1;
    }
  }
}
