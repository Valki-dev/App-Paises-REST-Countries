import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @Input() paisesGuardados!: Pais[];
  constructor() { }

  ngOnInit(): void {
  }

}
