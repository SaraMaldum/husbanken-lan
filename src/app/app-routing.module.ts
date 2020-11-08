import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanListeComponent } from './lan-liste/lan-liste.component';
import { LanDetaljerComponent } from './lan-detaljer/lan-detaljer.component';

const routes: Routes = [
  { path: '', component: LanListeComponent },
  { path: 'detail/:id', component: LanDetaljerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
