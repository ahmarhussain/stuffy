import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './header/header.component';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { UnapprovedContractorsPageComponent } from './unapproved-contractors-page/unapproved-contractors-page.component';
import { UnapprovedContractorsPageModule } from './unapproved-contractors-page/unapproved-contractors-page.module';
import { CoreModule } from './core/core.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HeaderComponent,
    SidepanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    UnapprovedContractorsPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
