import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BusquedaPaisesComponent } from './SPA/busqueda-paises/busqueda-paises.component';
import { BusquedaRegionesComponent } from './SPA/busqueda-regiones/busqueda-regiones.component';
import { DetallesPaisComponent } from './SPA/detalles-pais/detalles-pais.component';
import { BusquedaCapitalesComponent } from './SPA/busqueda-capitales/busqueda-capitales.component';
import { CompartidoModule } from '../compartido/compartido.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TablaComponent } from './compartidoPaises/tabla/tabla.component';


@NgModule({
  declarations: [
    BusquedaPaisesComponent,
    BusquedaRegionesComponent,
    BusquedaCapitalesComponent,
    DetallesPaisComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    CompartidoModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  exports:  [
    BusquedaPaisesComponent
  ]
})
export class PaisesModule { }
