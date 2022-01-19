import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DumbComponentsModule } from './modules/dumb-components/dumb-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DumbComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
