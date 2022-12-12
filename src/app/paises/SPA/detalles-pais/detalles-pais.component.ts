import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../../servicios/servicios.service';
import { Pais } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-detalles-pais',
  templateUrl: './detalles-pais.component.html',
  styleUrls: ['./detalles-pais.component.css']
})
export class DetallesPaisComponent implements OnInit {

  constructor(private servive:ServiciosService, private rutaActiva: ActivatedRoute) { }

  infoPais!: Pais;

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(({id}) => this.servive.buscarPaisPorId(id).subscribe((paisEncontrado) => {
      console.log(paisEncontrado);
      this.infoPais = paisEncontrado[0];
      console.log(this.infoPais);
      
    }));  
  }

}
