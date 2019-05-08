import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMaterialModule} from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from './core/core.module';
import {UserService} from './home/users/user.service';
import {EventsService} from './home/events/events.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AppRoutingModule.COMPONENTS,
    AppRoutingModule.DIALOGS
  ],
  entryComponents: [AppRoutingModule.DIALOGS],
  providers: [
    EventsService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
