import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// TS error: "cannot find module" -> uncomment line in decl.d.ts
import { LibModule } from 'lib/module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 })
export class AppModule { }
