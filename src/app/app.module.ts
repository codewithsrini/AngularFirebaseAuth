import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { MaterialModule } from './material-module';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp( environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
