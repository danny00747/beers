import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BeersService } from './services/beers.service';
import { BeerTypesService } from './services/beer-types.service';
import { CitiesService } from './services/cities.service';
import { PlacesService } from './services/places.service';
import { InMemoryDataService } from './services/in-memory-data.service';
import { RouterModule } from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {LangService} from "./services/lang.service";
import {ToastService} from "./services/toast.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoadingService} from "./services/loading.service";
import {LoadingInterceptor} from "./interceptors/loading.interceptor";


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
   // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false, passThruUnknownUrl: true}),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient]
      }
    }),
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
  ],
  providers: [
    BeersService,
    BeerTypesService,
    CitiesService,
    PlacesService,
    LangService,
    LoadingService,
    ToastService,
    MatSnackBar,
    InMemoryDataService,
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ]
})
export class CoreModule { }
