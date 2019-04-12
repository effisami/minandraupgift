import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TraffikljusComponent } from './traffikljus/traffikljus.component';
import { ResaComponent } from './resa/resa.component';
import { ResechildComponent } from './resechild/resechild.component';
import { MindromComponent } from './mindrom/mindrom.component';

@NgModule({
  declarations: [
    AppComponent,
    TraffikljusComponent,
    ResaComponent,
    ResechildComponent,
    MindromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
