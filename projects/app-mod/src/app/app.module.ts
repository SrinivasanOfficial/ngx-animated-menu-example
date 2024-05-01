import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { NgxAnimatedMenuModule } from 'ngx-animated-menu';
import { NgxAnimatedCircularMenuModule } from '../../../ngx-animated-circular-menu/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatIconModule,
    NgxAnimatedMenuModule,
    NgxAnimatedCircularMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
