import {Component, Input, OnInit} from '@angular/core';
import {LangService} from "../../../core/services/lang.service";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  currentLang$ = this.langService.getCurrentLang;
  @Input('errorMessage') errorMessage: Record<string, string> = {};

  constructor(
    private readonly langService: LangService
  ) { }

  ngOnInit(): void {
  }

}
