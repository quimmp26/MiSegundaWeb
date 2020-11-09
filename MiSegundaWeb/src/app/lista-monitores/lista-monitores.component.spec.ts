import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMonitoresComponent } from './lista-monitores.component';

describe('ListaMonitoresComponent', () => {
  let component: ListaMonitoresComponent;
  let fixture: ComponentFixture<ListaMonitoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMonitoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMonitoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
