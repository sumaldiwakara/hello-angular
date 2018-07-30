import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ClConsoleComponentsModule } from '@mitel/cl-console-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	ClConsoleComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
