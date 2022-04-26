import {Component, OnInit} from '@angular/core';
import {LangService} from "../services/lang.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  languages = this.langService.getLanguages;
  currentLang$ = this.langService.getCurrentLang;

  constructor(
  private readonly langService: LangService
  ) { }

  ngOnInit(): void {
    this.langService.init();
  }

  public updateLanguage(lang: string): void {
    this.langService.changeLanguage(lang);
  }

}
