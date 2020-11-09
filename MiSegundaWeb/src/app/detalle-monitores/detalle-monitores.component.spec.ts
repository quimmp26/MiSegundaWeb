import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMonitoresComponent } from './detalle-monitores.component';

describe('DetalleMonitoresComponent', () => {
  let component: DetalleMonitoresComponent;
  let fixture: ComponentFixture<DetalleMonitoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleMonitoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleMonitoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
