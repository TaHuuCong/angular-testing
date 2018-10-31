import { LanguageService } from "../services/language.service";
import { TestBed } from "@angular/core/testing";

describe("LanguageService test", () => {
  let service: LanguageService;

  beforeEach(() => {
    // don't use TestBed
    // service = new LanguageService();
    // -----

    // use TestBed
    TestBed.configureTestingModule({
      providers: [LanguageService]
    });
    service = TestBed.get(LanguageService);
    // -----
  });

  it("should return available languages", () => {
    let langs = service.getLangs();
    expect(langs).toContain("vn");
    expect(langs).toContain("jp");
    expect(langs).toContain("uk");
    expect(langs.length).toEqual(3);
  });
});
