import { makeAutoObservable } from "mobx";

export class AuthStore {
  accessToken = "";

  constructor() {
    makeAutoObservable(this);
  }

  setAccessToken(newAccessToken: string) {
    this.accessToken = newAccessToken;
  }
}
