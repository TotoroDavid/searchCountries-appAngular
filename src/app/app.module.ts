import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CountryModule } from './country/countrie.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CountryModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule // We have to use for get the http information

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
