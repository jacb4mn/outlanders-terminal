import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TerminalShellComponent } from './terminal-shell/terminal-shell.component';
import { MainApplicationComponent } from './main-application/main-application.component';
import { PersonsOfInterestComponent } from './persons-of-interest/persons-of-interest.component';
import { IpViewerComponent } from './ip-viewer/ip-viewer.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { ShipStatusComponent } from './ship-status/ship-status.component';
import { ManagementOptionsComponent } from './management-options/management-options.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalShellComponent,
    MainApplicationComponent,
    PersonsOfInterestComponent,
    IpViewerComponent,
    NavigatorComponent,
    ShipStatusComponent,
    ManagementOptionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
