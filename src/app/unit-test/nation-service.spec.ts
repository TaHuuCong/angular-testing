import { LanguageService } from "../services/language.service";
import { NationService } from "../services/nation.service";
import { TestBed } from "@angular/core/testing";

describe("NationService test", () => {
  let nation: NationService;

  // use TestBed
  let languageServiceSpy: jasmine.SpyObj<LanguageService>;
  beforeEach(() => {
    const spy = jasmine.createSpyObj("LanguageService", ["getLangs"]);
    TestBed.configureTestingModule({
      providers: [
        NationService,
        {
          provide: LanguageService,
          useValue: spy
        }
      ]
    });
    nation = TestBed.get(NationService);
    languageServiceSpy = TestBed.get(LanguageService);
  });
  // -----

  it("should return available language from language service", () => {
    nation = new NationService(new LanguageService());
    const langs = nation.getLangs();
    expect(langs).toContain("vn");
    expect(langs).toContain("jp");
    expect(langs).toContain("uk");
    expect(langs.length).toEqual(3);
  });

  it("should return faked language from a fake object", () => {
    const fake = {
      getLangs: () => ["us"]
    };
    nation = new NationService(fake as LanguageService);
    const langs = nation.getLangs();
    expect(langs).toContain("us");
    expect(langs.length).toEqual(1);
  });

  it("should return language from a spy", () => {
    // don't use TestBed
    // create `getLangs` spy on an object representing the LanguageService
    // const languageServiceSpy = jasmine.createSpyObj('LanguageService', ['getLangs']);
    // -----

    // set the value to return when the `getLangs` spy is called.
    const spyValue = "spy";
    languageServiceSpy.getLangs.and.returnValue(spyValue);

    nation = new NationService(languageServiceSpy);
    expect(nation.getLangs()).toBe(spyValue);
  });
});

describe("NationService test without beforeEach()", () => {
  function setup() {
    const languageServiceSpy = jasmine.createSpyObj("LanguageService", [
      "getLangs"
    ]);
    const spyValue = "spy";
    const nation = new NationService(languageServiceSpy);

    languageServiceSpy.getLangs.and.returnValue(spyValue);
    return { nation, spyValue, languageServiceSpy };
  }

  it("should return language from a spy", () => {
    const { nation, spyValue, languageServiceSpy } = setup();
    expect(nation.getLangs()).toBe(spyValue);
  });
});
