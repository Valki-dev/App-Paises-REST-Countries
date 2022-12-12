import { Component } from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';
import { ServiciosService } from '../../servicios/servicios.service';

@Component({
  selector: 'app-busqueda-paises',
  templateUrl: './busqueda-paises.component.html',
  styleUrls: ['./busqueda-paises.component.css']
})
export class BusquedaPaisesComponent {

  constructor(private service: ServiciosService) { }

  paisesGuardados: Pais[] = [];

  busqueda: string = '';

  buscarPais(busqueda: string) {
    console.log(this.paisesGuardados);
    this.service.buscarPais(busqueda).subscribe((respuesta: any)=> {
      this.paisesGuardados = respuesta;
    }); 
    this.busqueda = '';
  }

}
