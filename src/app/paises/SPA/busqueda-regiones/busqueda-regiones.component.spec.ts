import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaRegionesComponent } from './busqueda-regiones.component';

describe('BusquedaRegionesComponent', () => {
  let component: BusquedaRegionesComponent;
  let fixture: ComponentFixture<BusquedaRegionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaRegionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaRegionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
