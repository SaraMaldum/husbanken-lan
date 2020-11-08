import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanListeComponent } from './lan-liste/lan-liste.component';
import { LanDetaljerComponent } from './lan-detaljer/lan-detaljer.component';

@NgModule({
  declarations: [AppComponent, LanListeComponent, LanDetaljerComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
