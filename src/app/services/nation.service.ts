import { Injectable } from "@angular/core";
import { LanguageService } from "./language.service";

@Injectable()
export class NationService {
  constructor(private langService: LanguageService) {}
  getLangs() {
    return this.langService.getLangs();
  }
}
