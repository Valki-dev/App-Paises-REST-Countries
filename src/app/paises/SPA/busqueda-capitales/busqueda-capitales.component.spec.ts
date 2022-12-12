import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaCapitalesComponent } from './busqueda-capitales.component';

describe('BusquedaCapitalesComponent', () => {
  let component: BusquedaCapitalesComponent;
  let fixture: ComponentFixture<BusquedaCapitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaCapitalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaCapitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
