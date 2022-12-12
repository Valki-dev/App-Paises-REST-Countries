import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaPaisesComponent } from './paises/SPA/busqueda-paises/busqueda-paises.component';
import { BusquedaCapitalesComponent } from './paises/SPA/busqueda-capitales/busqueda-capitales.component';
import { BusquedaRegionesComponent } from './paises/SPA/busqueda-regiones/busqueda-regiones.component';
import { DetallesPaisComponent } from './paises/SPA/detalles-pais/detalles-pais.component';

const routes: Routes = [
  {path: '', component: BusquedaPaisesComponent},
  {path: 'capitales', component: BusquedaCapitalesComponent},
  {path: 'regiones', component: BusquedaRegionesComponent},
  {path: 'detalles/:id', component: DetallesPaisComponent},
  {path: '**', redirectTo: ''} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
