import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './components/gridGenerator/grid.component';
import { ReaderComponent } from './components/fileReader/reader.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ReaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
