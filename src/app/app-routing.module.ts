import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CachorroComponent } from './components/produtos/cachorro/cachorro.component';
import { GatoCachorroComponent } from './components/produtos/gato-cachorro/gato-cachorro.component';
import { GatoComponent } from './components/produtos/gato/gato.component';
import { HomeComponent } from './template/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'produtos/cachorro', component:CachorroComponent},
  {path:'produtos/gato', component:GatoComponent},
  {path:'produtos/gato-cachorro', component:GatoCachorroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
