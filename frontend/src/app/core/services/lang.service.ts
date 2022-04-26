import {Injectable} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class LangService {

  private currentLang$: BehaviorSubject<string>;
  private languages = ['en', 'fr'];

  constructor(
    private readonly translateService: TranslateService
  ) {

    this.currentLang$ = new BehaviorSubject<string>('en');
  }

  get getCurrentLang(): Observable<string> {
    return this.currentLang$.asObservable();
  }

  get getLanguages(): string[] {
    return this.languages;
  }

  public init(): void {
    this.translateService.addLangs(this.languages);
    const browserLang = this.translateService.getBrowserLang();
    this.currentLang$.next(browserLang?.match(/en|fr/) ? browserLang : 'en');
    this.translateService.use(this.currentLang$.value);
  }

  public changeLanguage(lang: string): void {
    this.translateService.use(lang);
    this.currentLang$.next(lang);
  }

}
