import { Injectable } from "@angular/core";

@Injectable()
export class LanguageService {
  protected langs = ["vn", "jp", "uk"];

  getLangs() {
    return this.langs;
  }
}
